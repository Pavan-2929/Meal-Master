import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import { User } from "@/models/user.model";
import bcryptjs from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongoConnect";

export const authOptions = {
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const email = credentials?.email;
        const password = credentials?.password;
        mongoose
          .connect(process.env.MONGO_URI)
          .then(() => {
            console.log("Mongoose connected");
          })
          .catch((error) => {
            console.log(error);
          });

        const user = await User.findOne({ email });
        const passwordOk =
        user && bcryptjs.compareSync(password, user.password);
        
        if (passwordOk) {
          console.log(user);
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
};

const handler = NextAuth(authOptions);


export { handler as GET, handler as POST };

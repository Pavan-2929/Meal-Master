import mongoose from "mongoose";
import { User } from "@/models/user.model";
import bcryptjs from "bcryptjs";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch((error) => {
    console.log(error);
  });
export async function POST(req) {
  const userData = await req.json();
  console.log("gfd");
  const pass = userData.password;

  const salt = bcryptjs.genSaltSync();
  userData.password = bcryptjs.hashSync(pass, salt);

  const newUser = await User.create(userData);

  return Response.json(newUser);
}

"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfilePage = () => {
  const [formData, setFormData] = useState({});
  const session = useSession();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="bg-black my-8 py-4 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-md mb-24 mt-16">
      <section>
        <div className="text-center text-3xl text-white my-6">
          <h1>Profile Page</h1>
        </div>
        <div className="flex justify-center">
          <div className="relative w-16 h-20 md:w-32 md:h-32">
            <Image
              src={session.data?.user.image}
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <form className="max-w-lg mx-auto text-white">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            disabled
            defaultValue={session.data?.user.username}
            className="block w-full bg-gray-900 text-white border border-gray-700 rounded-md px-4 py-2 mt-4"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            disabled
            defaultValue={session.data?.user.email}
            className="block w-full bg-gray-900 text-white border border-gray-700 rounded-md px-4 py-2 mt-4"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={onChange}
            className="block w-full bg-gray-900 text-white border border-gray-700 rounded-md px-4 py-2 mt-4"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-all mt-4 disabled:opacity-60"
            >
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProfilePage;

"use client";

import Link from "next/link";
import React, { useState } from "react";
import {signIn} from 'next-auth/react'

const LoginPage = () => {
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(formData);

  await signIn("credentials", {
    email: formData.email, 
    password: formData.password,
    callbackUrl: "/",
  });
};

  return (
    <div className="bg-black my-8 py-4 w-[50%] mx-auto rounded-md mb-24 mt-16">
      <section>
        <div className="text-center text-3xl text-snow my-6">
          <h1>Login Page</h1>
        </div>
        <form
          className="block max-w-lg mx-auto text-black"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={onChange}
            />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={onChange}
          />
          <div className="flex justify-center text-[1.1rem]">
            <button type="submit" className="bg-gray text-black px-4 py-2 rounded-full hover:bg-snow transition-all mt-4">
              Login
            </button>
          </div>
          <div className="text-snow text-center my-2">
            <p>Or Login in with</p>
          </div>
          <div className="flex justify-center text-[1.1rem]">
            <button
              className="bg-gray text-black px-4 py-2 rounded-full hover:bg-snow transition-all mb-4"
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              Login with Google
            </button>
          </div>
          <div className="text-gray flex justify-center gap-4 mt-4">
            <p>Do not have an acoount?</p>
            <Link
              href={"/register"}
              className="text-snow underline-offset-2 underline"
            >
              Register
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;

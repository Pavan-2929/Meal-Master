"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/register", formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(formData);
  return (
    <div className="bg-black my-8 py-4 w-[50%] mx-auto rounded-md">
      <section>
        <div className="text-center text-3xl text-snow my-6">
          <h1>Register Page</h1>
        </div>
        <form
          className="block max-w-lg mx-auto text-black"
          onSubmit={handleRegister}
        >
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
            onChange={onChange}
          />
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
            <button
              type="submit"
              className="bg-gray text-black px-4 py-2 rounded-full hover:bg-snow transition-all mt-4"
            >
              Register
            </button>
          </div>
          <div className="text-snow text-center my-2">
            <p>Or Sign in with</p>
          </div>
          <div className="flex justify-center text-[1.1rem]">
            <button
              className="bg-gray text-black px-4 py-2 rounded-full hover:bg-snow transition-all mb-4"
              type="button"
              onClick={() => signIn("google", {callbackUrl: "/"})}
            >
              Login with Google
            </button>
          </div>
          <div className="text-gray flex justify-center gap-4 mt-4">
            <p>Already have an acoount?</p>
            <Link
              href={"/login"}
              className="text-snow underline-offset-2 underline"
            >
              Login
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;

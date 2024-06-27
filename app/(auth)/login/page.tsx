"use client";
import SignInForm from "@/components/forms/SignInForm";
import { signInService } from "@/services/authServices";
import React, { FormEvent } from "react";

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <div className="w-full lg:w-3/2">
          <h2 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h2>
          <SignInForm />
        </div>
      </div>

      <div className="w-1/2 bg-teal-400 flex-col justify-center items-center hidden lg:flex"></div>
    </div>
  );
};

export default Page;

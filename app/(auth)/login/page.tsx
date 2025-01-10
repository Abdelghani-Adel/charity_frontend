"use client";
import SignInForm from "@/components/forms/SignInForm";
import { signInService } from "@/services/authServices";
import Image from "next/image";
import React, { FormEvent } from "react";

const Page = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <div className="w-full lg:w-3/2">
          <h1 className="text-center mb-3 text-2xl font-semibold">
            جمعية الصالحين الخيرية
          </h1>
          <SignInForm />
        </div>
      </div>

      <div className="w-1/2 bg-secondary flex-col justify-center items-center hidden lg:flex">
        <div className="relative w-[400px] h-[100px]">
          <Image src="/images/new-logo.png" fill alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Page;

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
          <div className="relative w-[200px] h-[50px] m-auto mb-3">
            <Image src="/images/logoSecondary.png" fill alt="logo" />
          </div>
          <SignInForm />
        </div>
      </div>

      <div className="w-1/2 bg-secondary flex-col justify-center items-center hidden lg:flex">
        <div className="relative w-[400px] h-[100px]">
          <Image src="/images/logo.png" fill alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Page;

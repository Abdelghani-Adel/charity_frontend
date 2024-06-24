"use client";
import { signInService } from "@/services/authServices";
import React, { FormEvent } from "react";

const Page = () => {
  const sumbitHandler = async (e: FormEvent) => {
    e.preventDefault();
    await signInService("a.adel", "New.pass.vuee");
  };

  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <div className="w-full lg:w-3/2">
          <h2 className="text-2xl font-bold mb-4 text-center">تسجيل الدخول</h2>
          <form onSubmit={sumbitHandler}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                إسم المستخدم
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                placeholder="أدخل إسم المستخدم"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                className="mt-2 p-2 w-full border border-gray-300 rounded"
                placeholder="أدخل كلمة المرور"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <a href="#" className="text-sm text-teal-400 hover:underline">
                هل نسيت كلمة السر ؟
              </a>
            </div>
            <button type="submit" className="bg-teal-400 text-white p-2 w-full rounded">
              تسجيل الدخول
            </button>
          </form>
        </div>
      </div>

      <div className="w-1/2 bg-teal-400 flex-col justify-center items-center hidden lg:flex"></div>
    </div>
  );
};

export default Page;

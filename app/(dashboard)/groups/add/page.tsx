"use client";
import CreateGroupForm from "@/components/forms/CreateGroupForm";
import PageTitle from "@/components/ui/PageTitle";
import React from "react";

const Page = () => {
  return (
    <div className="lg:w-1/2 lg:m-auto">
      <PageTitle title="إضافة مجموعة" />
      <CreateGroupForm />
    </div>
  );
};

export default Page;

"use client";
import React from "react";

import { useAppSelector } from "@/redux/store";
import LoadingLayer from "./LoadingLayer";

const LoadingScreen = () => {
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  if (!isLoading) return null;

  return <LoadingLayer />;
};

export default LoadingScreen;

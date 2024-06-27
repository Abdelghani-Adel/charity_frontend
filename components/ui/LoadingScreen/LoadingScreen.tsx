"use client";
import React from "react";
import "./LoadingScreen.css";
import { useAppSelector } from "@/redux/store";

const LoadingScreen = () => {
  const isLoading = useAppSelector((state) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className="loadingScreen">
      <div className="pulse"></div>
    </div>
  );
};

export default LoadingScreen;

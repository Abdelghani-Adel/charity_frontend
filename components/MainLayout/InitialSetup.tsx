"use client";
import { fetchOptionsThunk } from "@/redux/slices/optionsSlice";
import { useAppDispatch } from "@/redux/store";
import React, { useEffect } from "react";

const InitialSetup = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOptionsThunk());
  }, []);

  return null;
};

export default InitialSetup;

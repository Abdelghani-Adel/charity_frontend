"use client";
import { fetchOptionsThunk } from "@/redux/slices/optionsSlice";
import { userActions } from "@/redux/slices/UserSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";

const InitialSetup = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOptionsThunk());
    dispatch(userActions.setUserData());
  }, []);

  return null;
};

export default InitialSetup;

"use client";

import { useEffect } from "react";

import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0882757c-b12f-4a33-9582-79797447609e");
  }, []);

  return null;
};

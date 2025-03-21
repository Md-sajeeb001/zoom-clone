import { SignIn } from "@clerk/nextjs";
import React from "react";

const SingInPage = () => {
  return (
    <main className="flex h-screen items-center justify-center w-full">
      <SignIn></SignIn>
    </main>
  );
};

export default SingInPage;

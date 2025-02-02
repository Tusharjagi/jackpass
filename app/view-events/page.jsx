"use client";

import { redirect } from "next/navigation";

export default function ViewEvents() {
  const handleHomeButton = () => {
    redirect("/");
  };
  return (
    <header
      className="font-bold text-3xl text-center bg-gray-700 text-white w-lvw grid place-content-center h-16 cursor-pointer"
      onClick={handleHomeButton}
    >
      Jack pass events
    </header>
  );
}

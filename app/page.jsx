"use client";

import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Home() {
  const handleCreateEvent = () => {
    redirect("create-event");
  };

  const handleViewEvents = () => {
    redirect("view-events");
  };

  const handleHomeButton = () => {
    redirect("/");
  };

  return (
    <div className="grid place-content-center gap-8">
      <header
        className="font-bold text-3xl text-center bg-gray-700 text-white w-lvw grid place-content-center cursor-pointer h-16"
        onClick={handleHomeButton}
      >
        Jack pass events
      </header>
      <div className="grid place-content-center gap-8 h-[60lvh]">
        <Button className="font-bold" size="lg" onClick={handleCreateEvent}>
          Create Events
        </Button>
        <Button className="font-bold" size="lg" onClick={handleViewEvents}>
          View Events
        </Button>
      </div>
    </div>
  );
}

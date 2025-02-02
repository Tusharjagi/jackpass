"use client";

import { redirect } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";

import { eventCommunities } from "@/lib/utils";
import CustomSelect from "@/components/custom-ui/custom-select";
import FileInput from "@/components/file-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StartAndEndDate from "@/components/start-end-date";
import ChooseLocation from "@/components/choose-location";
import AddDescription from "@/components/add-description";

export default function CreateEvents() {
  const isMobile = useIsMobile();

  const handleHomeButton = () => {
    redirect("/");
  };

  return (
    <div className="mb-10 sm:mb-20">
      <header
        className="font-bold text-3xl text-center bg-gray-700 text-white w-lvw grid place-content-center cursor-pointer h-16"
        onClick={handleHomeButton}
      >
        Jack pass events
      </header>
      <div className="grid place-content-center">
        <div className="font-semibold p-2 text-lg text-center">
          Create Event
        </div>
        {!isMobile && (
          <div className="absolute top-[100px] right-[40px]">
            <Button className="rounded-full text-base">Create Event</Button>
          </div>
        )}
        <div className="flex flex-col sm:flex-row sm:gap-10">
          <FileInput />
          <div className="flex flex-col gap-2 p-6 sm:w-[400px]">
            <h2 className="font-bold">Select Community</h2>
            <CustomSelect
              selectOptions={eventCommunities}
              placeholder="Please select community"
            />
            <div className="grid gap-2">
              <h2 className="font-bold">
                Event Title <span className="text-red-600">*</span>
              </h2>
              <Input
                className="rounded-lg"
                type="test"
                placeholder="Event Name"
              />
            </div>

            <StartAndEndDate />
            <ChooseLocation />
            <AddDescription />
          </div>
        </div>

        {isMobile && (
          <div className="mx-8 my-4">
            <Button className="w-full rounded-full text-base">
              Create Event
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

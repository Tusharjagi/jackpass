"use client";

import { redirect } from "next/navigation";

import { eventCommunities } from "@/lib/utils";
import CustomSelect from "@/components/custom-ui/custom-select";
import FileInput from "@/components/file-input";
import StartAndEndDate from "@/components/start-end-date";
import ChooseLocation from "@/components/choose-location";
import AddDescription from "@/components/add-description";
import { EventProvider } from "@/store/EventContext";
import CreateButton from "@/components/create-buttons/create-btn";
import EventName from "@/components/event-name";
import useIsMobile from "@/hooks/useIsMobile";

export default function CreateEvents() {
  const isMobile = useIsMobile();

  const handleHomeButton = () => {
    redirect("/");
  };

  return (
    <EventProvider>
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
          {!isMobile && <CreateButton />}

          <div className="flex flex-col sm:flex-row sm:gap-10">
            <FileInput />
            <div className="flex flex-col gap-2 p-6 sm:w-[400px]">
              <h2 className="font-bold">Select Community</h2>
              <CustomSelect
                selectOptions={eventCommunities}
                placeholder="Please select community"
              />
              <EventName />

              <StartAndEndDate />
              <ChooseLocation />
              <AddDescription />
            </div>
          </div>
          {isMobile && <CreateButton />}
        </div>
      </div>
    </EventProvider>
  );
}

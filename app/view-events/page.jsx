"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function ViewEvents() {
  const [data, setData] = useState(null);

  const fetchEventsData = () => {
    const eventsData = window.localStorage.getItem("events");
    setData(JSON.parse(eventsData));
  };

  useEffect(() => {
    fetchEventsData();

    const handleStorageChange = (event) => {
      if (event.storageArea === window.localStorage) {
        fetchEventsData();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleHomeButton = () => {
    redirect("/");
  };

  const formateDate = (dates) => {
    const date = new Date(dates);
    const options = { weekday: "long", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <header
        className="font-bold text-3xl text-center bg-gray-700 text-white w-lvw grid place-content-center h-16 cursor-pointer"
        onClick={handleHomeButton}
      >
        Jack pass events
      </header>

      {data?.length > 0 ? (
        <>
          <div className="text-lg font-bold py-2 px-4 mb-6">User Location</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <div className="grid place-content-center rounded-2xl">
                    {item.image && (
                      <Image
                        src={item.image}
                        width={150}
                        height={300}
                        alt="preview"
                      />
                    )}
                    {item.video && (
                      <video
                        width="100%"
                        height="auto"
                        controls
                        className="rounded-lg"
                      >
                        <source src={item.video} type="video/mp4" />
                        <source src={item.video} type="video/webm" />
                        <source src={item.video} type="video/ogg" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    <div className="text-[12px]">{item.community}</div>
                    <div className="font-semibold break-words whitespace-normal w-[80%]">
                      {item.title}
                    </div>
                    <div>{formateDate(item.startDate)}</div>
                    <div className="break-words whitespace-normal w-[80%]">
                      {item.location}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="grid place-content-center h-[50vh] text-[25px] text-blue-900">
          Currently No events registered
        </div>
      )}
    </>
  );
}

"use client";

import { createContext, useContext, useState } from "react";

const EventContext = createContext();

const defaultState = {
  community: "",
  title: "",
  startDate: "",
  endDate: "",
  location: "",
  description: "",
  image: null,
};

export const EventProvider = ({ children }) => {
  const [event, setEventState] = useState(defaultState);
  console.log("event:", event);

  const setEvent = (key, value) => {
    setEventState((prev) => ({ ...prev, [key]: value }));
  };

  const resetEvent = () => {
    setEventState(defaultState);
  };

  return (
    <EventContext.Provider value={{ event, setEvent, resetEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
};

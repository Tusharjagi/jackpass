import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DateTimePicker } from "../custom-ui/custom-date-picker";
import { useEvent } from "@/store/EventContext";

export default function StartAndEndDate() {
  const { setEvent, event } = useEvent();
  const [dates, setDates] = useState({
    startDate: event.startDate,
    endDate: event.endDate,
  });

  const handleDateChange = (type, date) => {
    if (date) {
      setDates((prev) => ({ ...prev, [type]: date }));
      setEvent(type, date);
    }
  };

  const handleTimeChange = (type, field, value) => {
    if (dates[field]) {
      const newDate = new Date(dates[field]);

      if (type === "hour") {
        newDate.setHours(
          (parseInt(value) % 12) + (newDate.getHours() >= 12 ? 12 : 0)
        );
      } else if (type === "minute") {
        newDate.setMinutes(parseInt(value));
      } else if (type === "ampm") {
        const currentHours = newDate.getHours();
        newDate.setHours(
          value === "PM" ? currentHours + 12 : currentHours - 12
        );
      }

      setDates((prev) => ({ ...prev, [field]: newDate }));
      setEvent(field, newDate);
    }
  };

  return (
    <div className="flex flex-col gap-8 my-4 relative">
      {["startDate", "endDate"].map((field, index) => (
        <div key={field} className="flex items-center">
          <span>
            {field === "startDate" ? (
              <ChevronUp className="text-gray-600" />
            ) : (
              <ChevronDown className="text-gray-600" />
            )}
          </span>
          <div className="flex justify-between items-center w-full">
            <span>{field === "startDate" ? "Starts" : "Ends"}</span>
            <DateTimePicker
              dateChange={(date) => handleDateChange(field, date)}
              timeChange={(type, value) => handleTimeChange(type, field, value)}
              selectedDateAndTime={dates[field]}
            />
          </div>
        </div>
      ))}
      <div className="absolute left-[12px] top-[20px] bottom-[20px] w-[2px] border-l-2 border-dotted border-gray-400"></div>
    </div>
  );
}

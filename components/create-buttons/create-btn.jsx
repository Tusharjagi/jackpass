import useIsMobile from "@/hooks/useIsMobile";
import { Button } from "../ui/button";
import { useEvent } from "@/store/EventContext";

export default function CreateButton() {
  const isMobile = useIsMobile();
  const { event, setEvent, resetEvent } = useEvent();
  const { image, description, title, startDate, endDate } = event;

  const storeEventInLocalStorage = () => {
    const missingFields = [];
    if (!image) missingFields.push("Image/video");
    if (!description) missingFields.push("Description");
    if (!title) missingFields.push("Title");
    if (!startDate) missingFields.push("Start Date");
    if (!endDate) missingFields.push("End Date");

    if (!missingFields.length) {
      localStorage.setItem("eventData", JSON.stringify(event));
      resetEvent();
    } else {
      setEvent("error", {
        message: "Missing required fields",
        fields: missingFields,
      });
    }
  };

  return (
    <div
      className={isMobile ? "mx-8 my-4" : "absolute top-[100px] right-[40px]"}
    >
      <Button
        className={`rounded-full text-base ${isMobile ? "w-full" : ""}`}
        onClick={storeEventInLocalStorage}
      >
        Create Event
      </Button>
    </div>
  );
}

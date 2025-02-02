import useIsMobile from "@/hooks/useIsMobile";
import { Button } from "../ui/button";
import { useEvent } from "@/store/EventContext";

export default function CreateButton() {
  const isMobile = useIsMobile();
  const { event } = useEvent();

  const storeEventInLocalStorage = () => {
    localStorage.setItem("eventData", JSON.stringify(event));
  };

  return (
    <div
      className={isMobile ? "mx-8 my-4" : "absolute top-[100px] right-[40px]"}
    >
      <Button
        className={
          isMobile ? "w-full rounded-full text-base" : "rounded-full text-base"
        }
        onClick={storeEventInLocalStorage}
      >
        Create Event
      </Button>
    </div>
  );
}

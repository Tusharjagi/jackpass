import useIsMobile from "@/hooks/useIsMobile";
import { Button } from "../ui/button";
import { useEvent } from "@/store/EventContext";

export default function CreateButtonMobile() {
  const isMobile = useIsMobile();
  const { event } = useEvent();

  const storeEventInLocalStorage = () => {
    localStorage.setItem("eventData", JSON.stringify(event));
  };

  return (
    <>
      {isMobile && (
        <div className="mx-8 my-4">
          <Button
            className="w-full rounded-full text-base"
            onClick={storeEventInLocalStorage}
          >
            Create Event
          </Button>
        </div>
      )}
    </>
  );
}

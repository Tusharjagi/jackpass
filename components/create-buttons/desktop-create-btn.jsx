import useIsMobile from "@/hooks/useIsMobile";
import { useEvent } from "@/store/EventContext";
import { Button } from "../ui/button";

export default function CreateButtonDesktop() {
  const isMobile = useIsMobile();
  const { event } = useEvent();

  const storeEventInLocalStorage = () => {
    localStorage.setItem("eventData", JSON.stringify(event));
  };

  return (
    <>
      {!isMobile && (
        <div className="absolute top-[100px] right-[40px]">
          <Button
            className="rounded-full text-base"
            onClick={storeEventInLocalStorage}
          >
            Create Event
          </Button>
        </div>
      )}
    </>
  );
}

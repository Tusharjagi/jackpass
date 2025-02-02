import { useEvent } from "@/store/EventContext";
import { Input } from "../ui/input";

export default function EventName() {
  const { setEvent, event } = useEvent();

  const handleOnChangeValue = (event) => {
    setEvent("title", event.target.value);
  };

  return (
    <>
      <div className="grid gap-2">
        <h2 className="font-bold">
          Event Title <span className="text-red-600">*</span>
        </h2>
        <Input
          className="rounded-lg"
          type="test"
          value={event.title}
          placeholder="Event Name"
          onChange={handleOnChangeValue}
        />
      </div>
    </>
  );
}

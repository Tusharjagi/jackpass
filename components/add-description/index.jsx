import { useState } from "react";
import { ChevronRight, PencilLine } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useEvent } from "@/store/EventContext";

export default function AddDescription() {
  const { setEvent, event } = useEvent();
  const [isClickOnDescription, setIsClickOnDescription] = useState(false);

  const handleDescriptionClick = () => {
    setIsClickOnDescription(true);
  };

  const handleOnBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsClickOnDescription(false);
    }
  };

  const handleOnChange = (event) => {
    setEvent("description", event.target.value);
  };

  return (
    <div
      className="flex gap-2 cursor-pointer items-center"
      onClick={handleDescriptionClick}
      onBlur={handleOnBlur}
      tabIndex={0}
    >
      <PencilLine className="text-gray-600" />
      <div className="flex justify-between w-full">
        <div>
          <h2>
            Add Description <span className="text-red-600">*</span>
          </h2>
          {isClickOnDescription ? (
            <Textarea
              placeholder="Type your message here."
              className="w-[280px]"
              onChange={handleOnChange}
              value={event.description}
            />
          ) : (
            <span className="text-xs text-gray-600">
              Add a brief description to let attendees know what your event all
              about
            </span>
          )}
        </div>
        <span>
          <ChevronRight className="text-gray-600" />
        </span>
      </div>
    </div>
  );
}

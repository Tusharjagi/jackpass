import { ChevronRight, MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { useEvent } from "@/store/EventContext";
import { useState } from "react";

export default function ChooseLocation() {
  const { setEvent } = useEvent();
  const [isLocationClicked, setIsLocationClicked] = useState(false);

  const handleOnChange = (event) => {
    setEvent("location", event.target.value);
  };

  const handleLocationClicked = () => {
    setIsLocationClicked(true);
  };

  const handleOnBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsLocationClicked(false);
    }
  };

  return (
    <div
      className="flex gap-2 cursor-pointer mb-8"
      onClick={handleLocationClicked}
      onBlur={handleOnBlur}
      tabIndex={0}
    >
      <MapPin className="text-gray-600" />
      <div className="flex justify-between w-full items-center ">
        {isLocationClicked ? (
          <Input
            placeholder="Please enter your location"
            onClick={handleOnChange}
          />
        ) : (
          <h2>Choose Location</h2>
        )}
        <span>
          <ChevronRight className="text-gray-600" />
        </span>
      </div>
    </div>
  );
}

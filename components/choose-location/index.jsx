import { ChevronRight, MapPin } from "lucide-react";

export default function ChooseLocation() {
  return (
    <div className="flex gap-2 cursor-pointer mb-8">
      <MapPin className="text-gray-600" />
      <div className="flex justify-between w-full">
        <h2>Choose Location</h2>
        <span>
          <ChevronRight className="text-gray-600" />
        </span>
      </div>
    </div>
  );
}

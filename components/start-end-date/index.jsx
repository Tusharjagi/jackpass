import { ChevronDown, ChevronUp } from "lucide-react";
import { DateTimePicker } from "../custom-ui/custom-date-picker";

export default function StartAndEndDate() {
  return (
    <div className="flex flex-col gap-8 my-4 relative">
      <div className="flex items-center">
        <span>
          <ChevronUp className="text-gray-600" />
        </span>
        <div className="flex justify-between items-center w-full">
          <span>Starts</span>
          <DateTimePicker />
        </div>
      </div>
      <div className="absolute left-[12px] top-[20px] bottom-[20px] w-[2px] border-l-2 border-dotted border-gray-400"></div>

      <div className="flex items-center">
        <span>
          <ChevronDown className="text-gray-600" />
        </span>
        <div className="flex justify-between items-center w-full">
          <span>Ends</span>
          <DateTimePicker />
        </div>
      </div>
    </div>
  );
}

import { ChevronRight, PencilLine } from "lucide-react";

export default function AddDescription() {
  return (
    <div className="flex gap-2 cursor-pointer items-center ">
      <PencilLine className="text-gray-600" />
      <div className="flex justify-between w-full">
        <div>
          <h2>
            Add Description <span className="text-red-600">*</span>
          </h2>
          <span className="text-sm text-gray-800">
            Add a brief description to let attendees know what your event all
            about
          </span>
        </div>
        <span>
          <ChevronRight className="text-gray-600" />
        </span>
      </div>
    </div>
  );
}

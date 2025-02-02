import { useEvent } from "@/store/EventContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function CustomSelect({ selectOptions, placeholder }) {
  const { setEvent } = useEvent();
  const onValueChange = (value) => {
    setEvent("community", value);
  };

  return (
    <Select className="rounded-full" onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {selectOptions.map(({ id, name }) => {
          return (
            <SelectItem className="cursor-pointer" key={id} value={id}>
              {name}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

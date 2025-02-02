import { useEvent } from "@/store/EventContext";

export default function Errors() {
  const { event } = useEvent();
  const { error } = event;

  return (
    <div>
      {error.fields?.map((err) => {
        return (
          <div
            key={err}
            className="text-red-600"
          >{`* ${error.message} ${err}`}</div>
        );
      })}
    </div>
  );
}

import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";
import { useEvent } from "@/store/EventContext";

export default function FileInput() {
  const isMobile = useIsMobile();
  const { setEvent } = useEvent();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      const fileType = file.type.split("/")[0];

      if (fileType === "image") {
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64String = reader.result;
          setEvent("image", base64String);
        };
        reader.onerror = (error) => {
          console.error("Error reading image file:", error);
        };
      } else if (fileType === "video") {
        const videoUrl = URL.createObjectURL(file);
        setEvent("video", videoUrl);
      } else {
        console.error("Unsupported file type:", file.type);
      }
    }
  };

  return (
    <div className="relative cursor-pointer">
      <label htmlFor="file-upload">
        <Image
          src="/icons/art-gallery-icon.png"
          height={isMobile ? 1000 : 400}
          width={isMobile ? 1000 : 400}
          alt="gallery-icon"
        />
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-lg bg-slate-100 px-6 py-2 rounded-lg flex gap-4">
          <Image
            src="/icons/image-icon.png"
            width={24}
            height={24}
            alt="image-icon"
          />
          Add Photo
        </span>
        <input
          id="file-upload"
          type="file"
          accept="image/*, video/*"
          hidden
          onChange={handleFileUpload}
        />
      </label>
    </div>
  );
}

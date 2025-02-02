import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

export default function FileInput() {
  const isMobile = useIsMobile();

  const handleFileUpload = () => {};

  return (
    <div className="relative cursor-pointer">
      <label htmlFor="file-upload cursor-pointer">
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

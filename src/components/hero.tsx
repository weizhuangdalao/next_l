import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  content: string;
}
export default function hero({ src, content }: Props) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0">
        <Image
          className="-z-1"
          fill
          style={{ objectFit: "cover" }}
          src={src}
          alt="01"
        ></Image>
        <div className="flex justify-center pt-48">
          <span className="text-white font-bold text-6xl text-shadow-pink-50">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}

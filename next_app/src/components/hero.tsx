import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  src: StaticImageData;
  content: string | React.ReactNode;
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
        {typeof content === "string" ? (
          <div className="flex justify-center pt-48">
            <span className="text-white font-bold text-6xl text-shadow-pink-50">
              {content}
            </span>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white mt-20 p-6 rounded-lg">{content}</div>
        )}
      </div>
    </div>
  );
}

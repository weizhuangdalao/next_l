/***
 * 使用背景图片
 * 不需要纵向滚动条的页面使用
 * 
 * 
 */

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
          <div className="text-white pt-20 h-full">{content}</div>
        )}
      </div>
    </div>
  );
}

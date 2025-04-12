"use client";

import IconFont from "@/components/iconFont";
import SreachInput from "@/components/blog/sreachInput";
import BlogList from "@/components/blog/blogList";
import { useMemo, useState } from "react";
import { Tag, Avatar } from "antd";

interface arrayType {
  name: string;
  icon: React.ReactNode;
  link: string;
  id: number;
}

const myLanguage: Array<arrayType> = [
  {
    name: "Html",
    icon: <IconFont type="icon-HTML" />,
    link: "/blog/html",
    id: 1,
  },
  {
    name: "Css",
    icon: <IconFont type="icon-css" />,
    link: "/blog/css",
    id: 2,
  },
  {
    name: "JavaScript",
    icon: <IconFont type="icon-JavaScript" />,
    link: "/blog/javascript",
    id: 3,
  },
  {
    name: "Vue",
    icon: <IconFont type="icon-Vue" />,
    link: "/blog/vue",
    id: 4,
  },
  {
    name: "React",
    icon: <IconFont type="icon-React" />,
    link: "/blog/react",
    id: 5,
  },
  {
    name: "Ts",
    icon: <IconFont type="icon-typescript" />,
    link: "/blog/typescript",
    id: 6,
  },
  {
    name: "NodeJs",
    icon: <IconFont type="icon-nodejs-copy" />,
    link: "/blog/nodejs",
    id: 7,
  },
  {
    name: "Webpack",
    icon: <IconFont type="icon-webpack" />,
    link: "/blog/webpack",
    id: 8,
  },
  {
    name: "Vite",
    icon: <IconFont type="icon-vite" />,
    link: "/blog/vite",
    id: 10,
  },
  // {
  //   name: "Vite",
  //   icon: <IconFont type="icon-vite" />,
  //   link: "/blog/vite",
  //   id: 11,
  // },
  // {
  //   name: "Vite",
  //   icon: <IconFont type="icon-vite" />,
  //   link: "/blog/vite",
  //   id: 12,
  // },
];
export default function BlogPage() {
  const [sreachValue, setSreachValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  function handleChange(tagItem: number, checked: boolean) {
    const newSelectedTags = checked
      ? [...selectedTags, tagItem]
      : selectedTags.filter((id) => id !== tagItem);
    setSelectedTags(newSelectedTags);
  }

  const myLanguageTags = useMemo(() => {
    return myLanguage.map((item) => (
      <Tag.CheckableTag
        key={item.id}
        checked={selectedTags.includes(item.id)}
        onChange={(checked) => handleChange(item.id, checked)}
      >
        <div className="flex justify-center items-center">
          <Avatar
            size="small"
            style={{ background: "none" }}
            icon={item.icon}
          />
          <span className="text-white font-bold">{item.name}</span>
        </div>
      </Tag.CheckableTag>
    ));
  }, [selectedTags]);

  return (
    <div className="flex flex-col justify-center w-[50%] mx-auto pt-20 pb-50">
      {/* 表单搜索相关 */}
      <SreachInput {...{ sreachValue, setSreachValue }} />
      {/* 标签搜索 */}
      <div className="flex maoboli mt-5 flex-wrap gap-2 p-5">
        {myLanguageTags}
      </div>
      {/* 博客列表 */}
      <div className="mt-5">
        <BlogList />
      </div>
    </div>
  );
}

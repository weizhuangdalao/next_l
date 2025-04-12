"use client";
import { Avatar } from "antd";
import Link from "next/link";
import { isEven } from "@/utils/index";

const data = [
  {
    title: "Ant Design Title 1",
    id: 1,
  },
  {
    title: "Ant Design Title 2",
    id: 2,
  },
  {
    title: "Ant Design Title 3",
    id: 3,
  },
  {
    title: "Ant Design Title 4",
    id: 4,
  },
  {
    title: "Ant Design Title 4",
    id: 5,
  },
];

export default function BlogList() {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item: { id: number; title: string }, index: number) => (
        <Link
          href={`/blog/${item.id}`}
          key={item.id}
          className={`flex maoboli p-5 ${isEven(index) ? 'flex-row-reverse' : ''}`}
        >
          <Avatar
            size={100}
            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
            className="min-w-[100px]"
          />
          <div className="flex flex-col justify-around gap-2">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <h1 className="text-sm">{`Ant Design, a design language for background applications, is refined 
            Ant Design, a design language for background applications, is refined by Ant UED Team,ign,
             a design language for background applications, is refi
            by Ant UED Team,ign, a design language for background applications, is refi`}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

"use client";
import { List, Avatar } from "antd";
import Link from "next/link";

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
  ];
  
export default function BlogList() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
              />
            }
            title={<Link href={`/blog/${item.id}`}>{item.title}</Link>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  );
}

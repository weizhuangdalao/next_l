import { Card } from "antd";
import type { Metadata } from "next";
import Link from "next/link";

interface Props {
  params: Promise<{
    id: string;
  }>;
}
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

//动态metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const current = data.find((item) => item.id === Number(id));
  return {
    title: current?.title,
    description: "博客详情页面",
  };
}
export default async function xiangqing({ params }: Props) {
  const { id } = await params;
  const current = data.find((item) => item.id === Number(id));
  return (
    <Card title={current?.title} extra={<Link href="/blog">返回</Link>} variant="borderless">
    <p>{current?.title}</p>
  </Card>
  )
}

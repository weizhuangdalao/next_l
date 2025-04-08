import db from "@/data/db";
import { NextResponse } from "next/server";
import type { Post } from "@/data/db";

interface Iparams {
  params: {
    id: string;
  }
}

//查找单个
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const { posts } = db.data;
  const current: Post | undefined = posts.find((item) => item.id === id);
  if (!current) {
    return NextResponse.json({
      code: -1,
      message: `id:${id},不存在`,
    });
  }
  return NextResponse.json({
    code: 0,
    data: current
  });
}

//删除
export async function DELETE(
  request: Request,
  { params }: Iparams
) {
  const { id } = params;
  await db.update(({ posts }) => {
    const index = posts.findIndex((item) => item.id === id);
    posts.splice(index, 1);
  });
  return NextResponse.json({
    code: 0,
    message: `id:${id},删除成功`,
  });
}

// 更新
// PUT => /api/articles/[id]
export async function PATCH(request: Request, { params }: Iparams) {
  const data = await request.json();
  const { id } = params;
  await db.update(({ posts }) => {
    const index = posts.findIndex((item) => item.id === id);
    posts[index] = {...posts[index], ...data}
  });
  return NextResponse.json({
    code: 0,
    message: `id:${id},更新成功`,
    data,
  });
}

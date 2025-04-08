import { NextResponse, type NextRequest, } from "next/server";
import db from "@/data/db";

//列表分页
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 10;
  const query = searchParams.get("query") || "";

  const start = (Number(page) - 1) * Number(pageSize);
  const end = start + Number(pageSize);
  const { posts } = db.data;
  if( query) {
    const filterData = posts.filter((item) => {
      return item.title.includes(query) || item.content.includes(query);
    })
    return NextResponse.json({
      code: 0,
      data: {
        total: filterData.length,
        list: filterData.slice(start, end),
        page,
        pageSize,
      },
    });
  } else {
    return NextResponse.json({
      code: 0,
      data: {
        total: posts.length,
        list: posts.slice(start, end),
        page,
        pageSize,
      },
    });
  }
}

//添加
export async function POST(req: NextRequest) {
  const data = await req.json();

  await db.update(({ posts }) =>
    posts.push({
      id: Date.now().toString(),
      ...data,
    })
  );
  return NextResponse.json({
    code: 0,
    message: "添加成功",
    data,
  });
}

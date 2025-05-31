import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

//分页
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1; // 当前页码
    const pageSize = Number(searchParams.get("pageSize")) || 10; // 每页数量
    const [total, list] = await Promise.all([
      prisma.user.count(), // 获取总数
      prisma.user.findMany({
        skip: (page - 1) * Number(pageSize), // 跳过前几条数据
        take: pageSize, // 取几条数据
      }),
    ]);
    return NextResponse.json({
      code: 0,
      data: { list, total, page, pageSize, message: "获取成功" },
    });
  } catch (error) {
    NextResponse.json({ code: -1, message: error }, { status: 500 });
  }
}
//添加
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body);
    const user = await prisma.user.create({
      data: body,
    });
    return NextResponse.json(
      { code: 0, data: user, message: "创建成功" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ code: -1, message: error }, {
      status: 500,
    });
  }
}

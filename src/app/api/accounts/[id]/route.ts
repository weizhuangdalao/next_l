import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// 获取单个账户信息
export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user
      ? NextResponse.json({ code: 0, data: user })
      : NextResponse.json({ code: -1, message: "用户不存在" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ code: -1, message: error }, { status: 500 });
  }
}

// 更新账户信息
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  try {
    const body = await request.json();
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...body,
      },
    });
    return NextResponse.json({ code: 0, data: user, message: "更新成功" });
  } catch (error) {
    return NextResponse.json({ code: -1, message: error }, { status: 500 });
  }
}

// 删除用户

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  try {
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ code: 0, data: user, message: "删除成功" });
  } catch (error) {
    return NextResponse.json({ code: -1, message: error }, { status: 500 });
  }
}

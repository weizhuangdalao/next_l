import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { username, password } = data;
  if (username === "admin" && password === "123456") {
    return new Response(JSON.stringify({ code: 0, message: "登录成功", token: "123456" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new Response(
      JSON.stringify({ code: -1, message: "用户名或密码错误" }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

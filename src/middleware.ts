// import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// 如果在函数内部使用 `await`，此函数可以标记为 `async`
export function middleware(request: NextRequest) {
    console.log('middleware','🚀')
    console.log(request.nextUrl.pathname)
}
 
// 查看下面的"匹配路径"了解更多
export const config = {
  matcher: '/about',
}
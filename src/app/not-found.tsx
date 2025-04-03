//全局not-font文件
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>公共not found页面</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
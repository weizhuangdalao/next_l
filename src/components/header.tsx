"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
  const arr = [
    { name: "博客", path: "/blog" },
    { name: "性能", path: "/performance" },
    { name: "工具", path: "/tool" },
    { name: "Scale", path: "/scale" },
  ];
  // if ([...arr.map((item) => item.path), "/"].includes(pathname)) {
    return (
      <div className="fixed w-full z-10 top-0 left-0">
        <div className="flex justify-between items-center container mx-auto py-5 font-bold text-white">
          <Link href="/" className="text-3xl">
            首页
          </Link>
          <div className="text-xl space-x-4">
            {arr.map((item) => (
              <Link className={`${pathname === item.path ? 'text-red-500' : ''}`} key={item.path} href={item.path}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
}

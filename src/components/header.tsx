"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
  const arr = [
    { name: "性能", path: "/performance" },
    { name: "Reli", path: "/reliability" },
    { name: "Scale", path: "/scale" },
  ];
  // if ([...arr.map((item) => item.path), "/"].includes(pathname)) {
    return (
      <div className="absolute w-full z-10">
        <div className="flex justify-between items-center container mx-auto p-5 font-bold text-white">
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
  // } else {
  //   return null;
  // }
}

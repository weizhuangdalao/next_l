import React from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";

export default function layout({
  children,
  team,
  analytics,
}: Readonly<{ children: React.ReactNode; [key: string]: React.ReactNode }>) {
  // const pathname = usePathname();
  return (
    <>
      <div className="flex justify-center container mx-auto gap-4 m-10">
        <Link href="/pingxinRoute">home</Link>
        <Link href="/pingxinRoute/visitors">visitors</Link>
      </div>
      <div className="flex container mx-auto justify-between gap-4">
        {team}
        {analytics}
      </div>
      {children}
    </>
  );
}

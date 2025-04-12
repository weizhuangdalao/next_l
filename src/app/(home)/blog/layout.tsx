// import Hero from "@/components/hero";
// import src from "#/02.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客列表",
  description: "博客列表",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-br from-[#555A61] via-[#B4765D] to-[#712017]">
      {/* <Hero src={src} content={children} /> */}{children}
    </div>
  );
}

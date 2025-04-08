import Hero from "@/components/hero";
import src from "#/05.jpg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Hero src={src} content={children} />
    </>
  );
}

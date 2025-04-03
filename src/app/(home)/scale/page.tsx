// import { notFound } from "next/navigation";
import src from "#/04.jpg"
import Hero from "@/components/hero";

export default function Scale() {
    // notFound();//触发局部not-fount函数
    return <Hero src={src} content={"Scale"} />;
}
"use client";
import homeSrc from "#/01.jpg";
import Hero from "@/components/hero";
import { Avatar, Timeline } from "antd";
import { UserOutlined, SmileOutlined } from "@ant-design/icons";
import Link from "next/link";
import MyLink from "@/components/homeRoot/myLink";
import MyKnowHow from "@/components/homeRoot/myKnowHow";
export default function Home() {
  function homePageContent() {
    return (
      <>
        <div className="flex h-full px-20 pb-10">
          <div className="flex-1 flex flex-col pr-10 h-full gap-5">
            {/* 左上 */}
            <div className="flex-1 flex flex-col items-baseline gap-5">
              <div className="flex items-center justify-start w-full gap-14">
                <h1 className="maoboli">
                  <Avatar
                    shape="square" // circle
                    size={55}
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                    icon={<UserOutlined />}
                  />
                </h1>
                <h1 className="font-bold text-sm flex flex-col gap-2">
                  <p>wei zhuang</p>
                  <p>15871716601</p>
                </h1>
                <h1 className="font-bold text-sm flex flex-col gap-2">
                  <p>472323249@qq.com</p>
                  <Link
                    href="https://github.com/weizhuangdalao"
                    target="_blank"
                  >
                    https://github.com/weizhuangdalao
                  </Link>
                </h1>
              </div>
              <MyLink AvatarShape="square" AvatarSize={40}></MyLink>
            </div>
            {/* 左下 */}
            <div
              className="flex-3 maoboli p-5 scrollbar-hide"
              style={{ overflowY: "scroll" }}
            >
              <Timeline
                items={[
                  {
                    color: "green",
                    children: "Create a services site 2015-09-01",
                  },
                  {
                    color: "green",
                    children: "Create a services site 2015-09-01",
                  },
                  {
                    color: "red",
                    children: (
                      <>
                        <p>Solve initial network problems 1</p>
                        <p>Solve initial network problems 2</p>
                        <p>Solve initial network problems 3 2015-09-01</p>
                      </>
                    ),
                  },
                  {
                    children: (
                      <>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                      </>
                    ),
                  },
                  {
                    color: "gray",
                    children: (
                      <>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                      </>
                    ),
                  },
                  {
                    color: "gray",
                    children: (
                      <>
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                      </>
                    ),
                  },
                  {
                    color: "#00CCFF",
                    dot: <SmileOutlined />,
                    children: <p>Custom color testing</p>,
                  },
                ]}
              />
            </div>
          </div>
          {/* 右 */}
          <div
            className="flex-1 h-full scrollbar-hide"
            style={{ overflowY: "scroll" }}
          >
            <MyKnowHow />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Hero src={homeSrc} content={homePageContent()} />
    </>
  );
}

import Link from "next/link";
import { Avatar, Space } from "antd";
import {
  GithubOutlined,
  WechatOutlined,
  BilibiliOutlined,
} from "@ant-design/icons";
import IconFont from "@/components/iconFont";
import { useState } from "react";

interface listType {
  link: string;
  id: number;
  name?: string;
  icon?: React.ReactNode;
}
interface Props {
  AvatarSize?: number;
  AvatarShape: "square" | "circle";
}

//我的相关连接
export default function MyLink({
  AvatarSize = 40,
  AvatarShape = "square",
}: Props) {
  const [hoverItem, setHoverItem] = useState(0);

  const myLink: Array<listType> = [
    {
      name: "Github",
      icon: <GithubOutlined />,
      link: "https://github.com/Lanjei",
      id: 1,
    },
    {
      name: "掘金",
      icon: <IconFont type="icon-juejin-logo" />,
      link: "https://juejin.cn/user/3245414492153901",
      id: 2,
    },
    {
      name: "leetcode",
      icon: <IconFont type="icon-leetcode" />,
      link: "https://juejin.cn/user/3245414492153901",
      id: 3,
    },
    {
      name: "飞书",
      icon: <IconFont type="icon-feishu" />,
      link: "https://zhr7sl8nky.feishu.cn/drive/me/",
      id: 4,
    },
    {
      name: "微信",
      icon: <WechatOutlined />,
      link: "https://juejin.cn/user",
      id: 5,
    },
    {
      name: "bilibili",
      icon: <BilibiliOutlined />,
      link: "https://www.bilibili.com/",
      id: 6,
    },
    // {
    //   name: "博客园",
    //   link: "https://www.cnblogs.com/Lanjei/",
    //   id: 4,
    // },
  ];
  return (
    <Space wrap size={15}>
      {myLink.map((item) => (
        <Link key={item.id} href={item.link} target="_blank">
          <p
            onMouseEnter={() => setHoverItem(item.id)}
            onMouseLeave={() => setHoverItem(0)}
            className={`${hoverItem === item.id ? "maoboli" : ""} h-10 w-10 rounded-[1]`}
          >
            <Avatar
              size={AvatarSize}
              shape={AvatarShape}
              icon={item.icon}
              className={`${hoverItem === item.id ? "bg-transparent" : "bg-black-500/50"}`}
              style={{...hoverItem === item.id ? { background: "none" } : { background: "rgba(0, 0, 0, 0.25)" }}}
            ></Avatar>
          </p>
        </Link>
      ))}
    </Space>
  );
}

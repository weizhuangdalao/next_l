import IconFont from "@/components/iconFont";
import { Space, Avatar } from "antd";
import React, { useRef, useState } from "react";
import { useRouter } from 'next/navigation'
interface arrayType {
  name: string;
  icon: React.ReactNode;
  link: string;
  id: number;
}

const myLanguage: Array<arrayType> = [
  {
    name: "Html",
    icon: <IconFont type="icon-HTML" />,
    link: "/blog/html",
    id: 1,
  },
  {
    name: "Css",
    icon: <IconFont type="icon-css" />,
    link: "/blog/css",
    id: 2,
  },
  {
    name: "JavaScript",
    icon: <IconFont type="icon-JavaScript" />,
    link: "/blog/javascript",
    id: 3,
  },
  {
    name: "Vue",
    icon: <IconFont type="icon-Vue" />,
    link: "/blog/vue",
    id: 4,
  },
  {
    name: "React",
    icon: <IconFont type="icon-React" />,
    link: "/blog/react",
    id: 5,
  },
  {
    name: "Ts",
    icon: <IconFont type="icon-typescript" />,
    link: "/blog/typescript",
    id: 6,
  },
  {
    name: "NodeJs",
    icon: <IconFont type="icon-nodejs-copy" />,
    link: "/blog/nodejs",
    id: 7,
  },
  {
    name: "Webpack",
    icon: <IconFont type="icon-webpack" />,
    link: "/blog/webpack",
    id: 8,
  },
  {
    name: "Vite",
    icon: <IconFont type="icon-vite" />,
    link: "/blog/vite",
    id: 10,
  },
];

export default function MyKnowHow() {
  const [isHover, setIsHover] = useState(false);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  return (
    <div className="flex flex-wrap relative justify-between px-10 pt-3">
      {myLanguage.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            {...{
              setIsHover,
              setOffsetLeft,
              setOffsetTop,
              setClientWidth,
              setClientHeight,
            }}
          />
        );
      })}
      <div
        style={{
          top: offsetTop,
          left: offsetLeft,
          width: clientWidth,
          height: clientHeight,
          opacity: isHover ? 1 : 0,
          transform: isHover ? "scale(1)" : "scale(0)",
        }}
        className="pointer-events-none absolute transition-all duration-700 after:absolute after:-inset-1 after:border-3 after:rounded-lg"
      >
      </div>
    </div>
  );
}

interface ItemProps {
  item: arrayType;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
  setOffsetLeft: React.Dispatch<React.SetStateAction<number>>;
  setOffsetTop: React.Dispatch<React.SetStateAction<number>>;
  setClientWidth: React.Dispatch<React.SetStateAction<number>>;
  setClientHeight: React.Dispatch<React.SetStateAction<number>>;
}

function Item(props: ItemProps) {
  const router = useRouter()
  const {
    item,
    setIsHover,
    setOffsetLeft,
    setOffsetTop,
    setClientWidth,
    setClientHeight,
  } = props;
  const ref = useRef<HTMLDivElement>(null);

  function mouseOver() {
    setIsHover(true);
    const { offsetLeft, offsetTop, clientWidth, clientHeight } =
      ref.current as HTMLDivElement;
    console.log(offsetLeft, offsetTop);
    setOffsetLeft(offsetLeft - (clientWidth * (1.2 - 1)) / 2);
    setOffsetTop(offsetTop - (clientHeight * (1.2 - 1)) / 2);
    setClientWidth(clientWidth * 1.2);
    setClientHeight(clientHeight * 1.2);
  }
  function mouseOut() {
    setIsHover(false);
    const { offsetLeft, offsetTop } = ref.current as HTMLDivElement;
    setOffsetLeft(offsetLeft);
    setOffsetTop(offsetTop);
  }

  function itemClick() {
    router.push(item.link)
  }
  return (
    <div
      ref={ref}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onClick={itemClick}
      className="maoboli w-[48%] relative cursor-pointer min-w-60 mb-5 p-3 !rounded-sm flex hover:z-[10] hover:scale-120 transition-all duration-300"
    >
      <Space size={10}>
        <Avatar className="" size={50} shape="square" icon={item.icon}></Avatar>
        <h1 className="font-bold">{item.name}</h1>
      </Space>
    </div>
  );
}

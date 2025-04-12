"use client";
import { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

interface Props {
  sreachValue: string;
  setSreachValue: (value: string) => void;
}
export default function SreachInput(props: Props) {
  const { sreachValue, setSreachValue } = props;
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function clearHandle() {
    setSreachValue("");
    if (inputRef.current) {
      inputRef.current.value = ""; // 直接清空输入框值
      inputRef.current.focus(); // 聚焦到输入框
    }
  }
  return (
    <div
      className={`maoboli h-15 px-2 min-w-100 flex justify-center items-center ${
        isFocus ? "outline-1" : "outline-none"
      }`}
    >
      <SearchOutlined
        className="mx-2"
        style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
      />
      <div className="flex-7 h-[100%] relative">
        <input
          ref={inputRef}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className="w-[100%] h-[100%] rounded-sm focus:outline-none text-xl"
          type="text"
          name="search"
          required={true}
          placeholder=" 请输入搜索的内容"
          onChange={(e) => {
            setSreachValue(e.target.value);
          }}
        />
        {sreachValue && (
          <SearchOutlined
            onClick={clearHandle}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
          />
        )}
      </div>
      <span className="min-w-20  ml-2 h-[80%] flex items-center justify-center bg-black text-white rounded-xl">
        搜 索
      </span>
    </div>
  );
}

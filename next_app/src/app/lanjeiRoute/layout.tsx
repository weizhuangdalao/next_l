import React from "react";

export default function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  [key: string]: React.ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}

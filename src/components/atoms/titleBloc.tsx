
import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <h2 className="text-white text-xl font-bold text-center">{children}</h2>
  );
}

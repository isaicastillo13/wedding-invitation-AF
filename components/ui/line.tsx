import Image from "next/image";
import type { CSSProperties } from "react";
import LineImage from "@/public/Line.png";

type LineProps = {
  style?: CSSProperties;
};

export default function Line({ style }: LineProps) {
  return (
    <Image
      src={LineImage}
      alt=""
      style={{ width: "50%", height: "auto", ...style }}
      className="mx-auto"
    />
  );
}

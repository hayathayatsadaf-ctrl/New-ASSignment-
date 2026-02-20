import type { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Grop8({ children }: Props) {
  return <div className="ts-collage">{children}</div>;
}
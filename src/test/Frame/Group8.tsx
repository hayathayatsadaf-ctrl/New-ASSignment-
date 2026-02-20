import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Group8({ children }: Props) {
  return (
    <div className="ts-collage" aria-label="Results collage">
      {children}
    </div>
  );
}

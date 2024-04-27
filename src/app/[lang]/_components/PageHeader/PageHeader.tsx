import { PropsWithChildren } from "react";

export function PageHeader({ children }: PropsWithChildren) {
  return <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">{children}</h1>;
}

import { ReactNode } from "react";

type ButtonProps = {
  id: string;
  classCss: string;
  children: ReactNode;
};

export default function Button({
  id,
  classCss,
  children,
  ...props
}: ButtonProps) {
  return (
    <button id={id} className={"btn " + classCss} {...props}>
      {children}
    </button>
  );
}

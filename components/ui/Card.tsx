import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-3xl
        border border-border
        bg-surface
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
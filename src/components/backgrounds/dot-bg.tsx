import type { TLayout } from "types";

export function DotBackground({ children }: TLayout) {
  return (
    <div className="h-fit w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.4] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
      {children}
    </div>
  );
}

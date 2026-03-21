import { cn } from "@/lib/utils";

interface SplinePlaceholderProps {
  width: string;
  height: string;
  fallbackGradient: string;
  className?: string;
  animationType?: "float" | "pulse" | "rotate";
}

const animationMap: Record<string, string> = {
  float: "animate-float-blob",
  pulse: "animate-scale-pulse",
  rotate: "animate-slow-rotate",
};

/**
 * Placeholder for future Spline 3D scenes.
 * TODO: Replace with <Spline scene="URL" /> when ready.
 */
const SplinePlaceholder = ({
  width,
  height,
  fallbackGradient,
  className,
  animationType = "float",
}: SplinePlaceholderProps) => (
  <div
    className={cn("rounded-full pointer-events-none", animationMap[animationType], className)}
    style={{ width, height, background: fallbackGradient }}
  >
    {/* TODO: Replace with <Spline scene="URL" /> */}
  </div>
);

export default SplinePlaceholder;

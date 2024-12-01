import { Button } from "@/components/ui/button";
import { Circle, Square, Squircle } from "lucide-react";

export const BorderStyles = {
  SQUARE: "square",
  CIRCLE: "circle",
  SQUIRCLE: "squircle",
};

const borderStylles = Object.values(BorderStyles);

type BorderStyleButtonProps = {
  borderStyle: string;
  onChange: (borderStyle: string) => void;
};

export default function BorderStyleButton({
  borderStyle,
  onChange,
}: BorderStyleButtonProps) {
  function handleClick() {
    const currentIndex = borderStylles ? borderStylles.indexOf(borderStyle) : 0;
    const nextIndex = (currentIndex + 1) % borderStylles.length;
    onChange(borderStylles[nextIndex]);
  }

  const Icon =
    borderStyle === "square"
      ? Square
      : borderStyle === "circle"
        ? Circle
        : Squircle;

  return (
    <Button
      variant="outline"
      size="icon"
      title="Change border style"
      onClick={handleClick}
    >
      <Icon className="size-5" />
    </Button>
  );
}

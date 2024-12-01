import { Button } from "@/components/ui/button";
import { Squircle } from "lucide-react";

type BorderStyleButtonProps = {
  borderStyle: string;
  onChange: (borderStyle: string) => void;
};

export default function BorderStyleButton({
  borderStyle,
  onChange,
}: BorderStyleButtonProps) {
  function handleClick() {}

  return (
    <Button
      variant="outline"
      size="icon"
      title="Change border style"
      onClick={handleClick}
    >
      <Squircle className="size-5" />
    </Button>
  );
}

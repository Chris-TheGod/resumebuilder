import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PaletteIcon } from "lucide-react";
import { useState } from "react";
import { Color, ColorChangeHandler, TwitterPicker } from "react-color";

type ColorPickerProps = {
  color: Color | undefined;
  onChange: ColorChangeHandler;
};

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  const [showPopOver, setShowPopOver] = useState(false);

  return (
    <Popover open={showPopOver} onOpenChange={setShowPopOver}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          title="Change resume color"
          onClick={() => setShowPopOver(true)}
        >
          <PaletteIcon className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="border-none bg-transparent shadow-none"
        align="end"
      >
        <TwitterPicker color={color} onChange={onChange} triangle="top-right" />
      </PopoverContent>
    </Popover>
  );
}

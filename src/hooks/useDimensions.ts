import React, { useEffect, useState } from "react";

export default function useDimensions(
  containerRef: React.RefObject<HTMLElement>,
) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const currentReft = containerRef.current;

    function getDimensions() {
      return {
        width: currentReft?.offsetWidth || 0,
        height: currentReft?.offsetHeight || 0,
      };
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setDimensions(getDimensions());
      }
    });

    if (currentReft) {
      resizeObserver.observe(currentReft);
      setDimensions(getDimensions());
    }

    return () => {
      if (currentReft) {
        resizeObserver.unobserve(currentReft);
      }
      resizeObserver.disconnect();
    };
  }, [containerRef]);

  return dimensions;
}

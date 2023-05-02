import React, { useEffect, useRef, useState } from "react";
import { createWidget } from "./Widget";

interface ColorWidgetProps {
  initialColor: string;
}

const ColorWidget: React.FC<ColorWidgetProps> = ({ initialColor }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const widget = createWidget(color, container);

      const handleStatusChange = (event: CustomEvent<{ status: string }>) => {
        console.log("The status is:", event.detail.status);
      };

      (widget as any).addEventListener("statusChange", handleStatusChange);

      return () => {
        widget.destroy();
        (widget as any).removeEventListener("statusChange", handleStatusChange);
      };
    }
  }, [color]);

  const changeColor = () => {
    setColor(
      `#${Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, "0")}`
    );
  };

  return (
    <div className="color-widget">
      <div className="widget-container" ref={containerRef}></div>
      <button className="widget-button" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default ColorWidget;

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

      interface StatusChangeEventDetail {
        status: string;
      }

      const handleStatusChange = (
        event: CustomEvent<StatusChangeEventDetail>
      ) => {
        console.log("The status is:", event.detail.status);
      };

      (widget as any).addEventListener("statusChange", handleStatusChange);

      return () => {
        widget.destroy();
        (widget as any).removeEventListener("statusChange", handleStatusChange);
      };
    }
  }, [color]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };

  const changeColor = () => {
    setColor(getRandomColor());
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

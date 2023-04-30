import React, { useState } from "react";

function Toggles() {
  // Use generic type boolean for useState hook
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div>
      <p>The toggle is {isOn ? "On" : "Off"}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <button
          className="w-16 h-8 flex items-center rounded-full bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsOn(!isOn)}
        >
          <span
            className={`${
              isOn ? "translate-x-8 bg-blue-500" : "translate-x-0 bg-white"
            } w-7 h-7 rounded-full transform transition-transform`}
          />
        </button>
      </div>
    </div>
  );
}

export default Toggles;

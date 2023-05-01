import React, { useState } from "react";

function Toggles() {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div>
      <p className="toggle-button-text">The toggle is {isOn ? "On" : "Off"}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <button className="toggle-button-bg" onClick={() => setIsOn(!isOn)}>
          <span
            className={`${
              isOn ? "toggle-button-on" : "toggle-button-off"
            } toggle-button-rotate `}
          />
        </button>
      </div>
    </div>
  );
}

export default Toggles;

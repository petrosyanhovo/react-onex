import React from "react";
import { useState } from "react";

export const Test = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div>
        <div
          style={{
            backgroundColor: isHovering ? "salmon" : "",
            color: isHovering ? "white" : "",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover me
        </div>
      </div>
    </div>
  );
};

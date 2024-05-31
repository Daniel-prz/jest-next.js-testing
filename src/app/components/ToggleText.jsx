"use client";
import React, { useState } from "react";

export default function toggleText() {
  const [Toggle, setToggle] = useState(false);
  const toggleMessage = () => {
    setToggle(!Toggle);
  };
  return (
    <div>
      <button
        name="Toggle"
        id="toggle"
        onClick={() => {
          setToggle(!Toggle);
        }}
      >
        Toggle
      </button>
      {Toggle && <p id="hello">Hello, World</p>}
    </div>
  );
}

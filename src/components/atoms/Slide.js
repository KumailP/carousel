import React from "react";

export default function Slide({ slide, active = false }) {
  return (
    <div
      className={`${
        active ? "visible opacity-100" : "invisible opacity-0"
      } transition-all absolute inset-0 overflow-y-hidden`}
    >
      {slide}
    </div>
  );
}

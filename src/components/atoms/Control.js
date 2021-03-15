import React from "react";

export default function Controls({ onClick, active }) {
  return (
    <div
      className={`${
        active ? "bg-primary-active" : "bg-primary"
      } w-4 h-4 rounded-full m-2 cursor-pointer`}
      onClick={onClick}
    />
  );
}

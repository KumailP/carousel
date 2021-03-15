import React, { useState } from "react";
import Slide from "../atoms/Slide";
import Control from "../atoms/Control";

function Carousel({ slides = [] }) {
  const [slide, setSlide] = useState(0);

  return (
    <div className="p-6">
      <div className="pt-ratio bg-primary relative w-full">
        {slides.map((s, i) => (
          <Slide key={i} slide={s} active={slide === i} />
        ))}
      </div>
      <div className="flex justify-center pt-3">
        {slides.map((s, i) => (
          <Control key={i} onClick={() => setSlide(i)} active={slide === i} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

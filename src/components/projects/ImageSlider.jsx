import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSlider = ({ slides, interval = 4000 }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  useEffect(() => {
    if (paused || total < 2) return undefined;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, interval);
    return () => clearInterval(timer);
  }, [paused, total, interval]);

  if (!total) return null;

  const go = (next) => setIndex((next + total) % total);
  const current = slides[index];

  return (
    <div
      className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/40 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/9] bg-black">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.label}
            className={`absolute inset-0 h-full w-full object-contain bg-[#071019] transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end justify-between gap-3">
        <p className="text-sm md:text-base font-medium text-white">
          {current.label}
          <span className="ml-2 text-cyan-300/80">{index + 1} / {total}</span>
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="h-9 w-9 rounded-full bg-white/10 hover:bg-cyan-400/30 flex items-center justify-center"
            aria-label="Previous screenshot"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="h-9 w-9 rounded-full bg-white/10 hover:bg-amber-400/30 flex items-center justify-center"
            aria-label="Next screenshot"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-1.5 px-4">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full duration-300 ${
              i === index ? 'w-8 bg-gradient-to-r from-cyan-400 to-amber-400' : 'w-2 bg-white/30'
            }`}
            aria-label={`Go to ${slide.label}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

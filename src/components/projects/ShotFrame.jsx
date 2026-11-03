import React from 'react';

const ShotFrame = ({ file, caption, className = '' }) => (
  <figure className={className}>
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-cyan-400/25 bg-gradient-to-br from-[#071422] via-[#10243d] to-[#1a1408] flex flex-col items-center justify-center px-6 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.35),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(245,186,47,0.25),transparent_40%)]" />
      <p className="relative text-cyan-200 text-sm uppercase tracking-[0.2em]">Image coming</p>
      <p className="relative mt-3 text-lg md:text-xl font-semibold text-white max-w-md">{caption}</p>
      <p className="relative mt-4 text-xs md:text-sm text-amber-200/90 break-all font-mono">{file}</p>
    </div>
    {caption && (
      <figcaption className="mt-3 text-sm text-gray-400">{caption}</figcaption>
    )}
  </figure>
);

export default ShotFrame;

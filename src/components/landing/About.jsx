import React from 'react';
import { ABOUT, LAYOUT, SECTION_IDS } from '../../constants';
import Reveal from '../ui/Reveal';

const About = () => {
  return (
    <div name={SECTION_IDS.about} className={`relative w-full ${LAYOUT.aboutGradient} text-[#0b192c] dark:text-white py-16 md:py-20 transition-colors duration-300`}>
      <div className="max-w-screen-lg px-6 mx-auto flex flex-col justify-center w-full">
        <Reveal>
          <p className="text-4xl font-bold section-heading">About</p>
        </Reveal>

        {ABOUT.highlights && (
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {ABOUT.highlights.map((item, index) => (
              <Reveal key={item.label} delay={80 * (index + 1)}>
                <div className="rounded-2xl p-5 bg-white dark:bg-[#0b1322] border border-slate-200/90 dark:border-white/10 shadow-sm hover:border-amber-500/60 duration-300 h-full">
                  <p className="text-amber-600 dark:text-cyan-300 text-sm tracking-wide font-semibold">{item.label}</p>
                  <p className="mt-2 text-[#0b192c] dark:text-white font-bold leading-snug">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-8 space-y-4">
          {ABOUT.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={140 * (index + 1)}>
              <p className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-gray-200">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        {ABOUT.research && (
          <Reveal delay={200} className="mt-10 pt-8 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-300">
                {ABOUT.research.title}
              </h3>
              <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full font-semibold bg-amber-100 text-amber-800 border border-amber-300/80 dark:bg-cyan-500/20 dark:text-cyan-200 dark:ring-1 dark:ring-cyan-500/30">
                Haqila Lab
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {ABOUT.research.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base md:text-lg leading-relaxed text-slate-700 dark:text-gray-200">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
};

export default About;

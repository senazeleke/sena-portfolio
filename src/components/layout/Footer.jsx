import React from 'react';
import { SITE } from '../../constants';

const Footer = () => (
  <footer className="w-full bg-slate-50 dark:bg-[#060b13] text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
    <div className="h-[2px] w-full bg-gradient-to-r from-navy-900 via-amber-500 to-yellow-500 dark:from-cyan-400 dark:via-amber-400 dark:to-yellow-500" />
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
      <div className="flex items-center gap-2.5">
        <img
          src={SITE.logo}
          alt={SITE.fullName}
          className="h-6 w-auto object-contain"
        />
        <span className="font-semibold text-navy-900 dark:text-white">
          {SITE.fullName}
        </span>
      </div>
      <p className="font-medium text-amber-700 dark:text-amber-300 tracking-wide">
        Make it happen.
      </p>
    </div>
  </footer>
);

export default Footer;

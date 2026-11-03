import React, { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { NAV_LINKS, ROUTES, SCROLL, SECTION_IDS, SITE } from '../../constants';
import useScrollProgress from '../../hooks/useScrollProgress';
import { useTheme } from '../../context/ThemeContext';

const brandNameClass =
  'font-logo text-2xl md:text-3xl leading-none bg-gradient-to-r from-navy-900 via-amber-600 to-yellow-600 dark:from-cyan-300 dark:via-amber-400 dark:to-yellow-500 bg-clip-text text-transparent';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === ROUTES.home;
  const { scrolled } = useScrollProgress();
  const { isDark, toggleTheme } = useTheme();

  const brandMark = (
    <div className="flex items-center gap-2.5 cursor-pointer overflow-visible">
      <img
        src={SITE.logo}
        alt=""
        className="h-7 md:h-8 w-auto object-contain"
      />
      <span className={brandNameClass}>{SITE.brandName}</span>
    </div>
  );

  return (
    <header
      className={`flex justify-between items-center w-full h-16 px-4 md:px-8 fixed top-0 left-0 z-50 overflow-visible transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#030712]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 text-navy-900 dark:text-white shadow-sm'
          : 'bg-gradient-to-b from-white/95 to-transparent dark:from-[#030712]/95 dark:to-transparent border-b border-transparent text-navy-900 dark:text-white'
      }`}
    >
      <div className="overflow-visible">
        {isHome ? (
          <ScrollLink to={SECTION_IDS.home} smooth={SCROLL.smooth} duration={SCROLL.duration}>
            {brandMark}
          </ScrollLink>
        ) : (
          <RouterLink to={ROUTES.home}>
            {brandMark}
          </RouterLink>
        )}
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        {isHome && (
          <ul className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map(({ id, link }) => (
              <li
                key={id}
                className="px-3 py-1 cursor-pointer capitalize font-serif text-slate-700 hover:text-amber-600 dark:text-gray-200 dark:hover:text-amber-300 hover:scale-105 duration-200 text-sm md:text-base font-medium"
              >
                <ScrollLink
                  to={link}
                  spy
                  smooth={SCROLL.smooth}
                  duration={SCROLL.duration}
                  offset={-70}
                  activeClass="nav-link-active"
                >
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>
        )}

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="p-2 rounded-full border border-slate-300/80 bg-slate-100/80 text-navy-900 hover:border-amber-500 hover:text-amber-600 dark:border-white/15 dark:bg-white/10 dark:text-amber-300 dark:hover:border-amber-400 duration-300 flex items-center justify-center transition-all shadow-sm"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? (
            <FaSun size={15} className="text-amber-400" />
          ) : (
            <FaMoon size={14} className="text-navy-900" />
          )}
        </button>

        {isHome && (
          <button
            type="button"
            onClick={() => setNav(!nav)}
            aria-label={nav ? 'Close menu' : 'Open menu'}
            className="cursor-pointer z-50 text-slate-700 hover:text-amber-600 dark:text-slate-200 dark:hover:text-amber-300 md:hidden shrink-0 p-1.5 rounded-lg focus:outline-none transition-colors"
          >
            {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        )}
      </div>

      {isHome && nav && (
        <ul className="flex flex-col justify-center items-center fixed inset-0 w-full h-screen bg-white dark:bg-[#030712] text-slate-800 dark:text-slate-100 backdrop-blur-2xl z-40 transition-colors duration-300">
          {NAV_LINKS.map(({ id, link }) => (
            <li
              key={id}
              className="px-6 py-4 cursor-pointer capitalize text-2xl sm:text-3xl font-semibold text-slate-800 hover:text-amber-600 dark:text-slate-100 dark:hover:text-amber-300 transition-colors duration-200"
            >
              <ScrollLink
                onClick={() => setNav(false)}
                to={link}
                spy
                smooth={SCROLL.smooth}
                duration={SCROLL.duration}
                offset={-70}
                activeClass="nav-link-active"
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;

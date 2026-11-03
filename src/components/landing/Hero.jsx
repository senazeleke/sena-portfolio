import React, { useState } from 'react';
import HeroImage from '../../assets/images/sena-hero.JPG';
import { FaShareAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsTelegram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link as ScrollLink } from 'react-scroll';
import { LAYOUT, SCROLL, SECTION_IDS, SITE, SOCIAL_LINKS } from '../../constants';

const SOCIAL_ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  whatsapp: FaWhatsapp,
  mail: HiOutlineMail,
  telegram: BsTelegram,
};

const Hero = () => {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div
      name={SECTION_IDS.home}
      className={`relative min-h-[100dvh] md:h-screen w-full overflow-hidden ${LAYOUT.heroGradient} transition-colors duration-300 flex items-center`}
    >
      <div className="hero-orb left-[8%] top-[22%] h-56 w-56 bg-amber-400/10 dark:bg-cyan-500/25" />
      <div
        className="hero-orb right-[10%] top-[30%] h-64 w-64 bg-blue-600/10 dark:bg-amber-400/20"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center w-full px-4 sm:px-6 pt-20 sm:pt-24 md:pt-16 pb-12 md:pb-0 gap-8 md:gap-14">
        <div className="flex flex-col justify-center text-center md:text-left flex-1 max-w-xl">
          <h2 className="hero-rise text-3xl sm:text-5xl md:text-6xl font-bold text-[#0b192c] dark:text-white whitespace-nowrap">
            I'm {SITE.fullName}
          </h2>
          <h3
            className="hero-rise text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 bg-gradient-to-r from-navy-900 via-amber-600 to-yellow-600 dark:from-cyan-300 dark:via-white dark:to-amber-300 bg-clip-text text-transparent"
            style={{ animationDelay: '120ms' }}
          >
            {SITE.role}
          </h3>
          <p
            className="hero-rise text-navy-800 dark:text-cyan-200/90 text-sm sm:text-base mt-3 tracking-wide font-medium"
            style={{ animationDelay: '160ms' }}
          >
            {SITE.affiliation}
          </p>
          <div
            className="hero-rise text-slate-600 dark:text-gray-300 py-3 text-base sm:text-lg max-w-lg mx-auto md:mx-0 space-y-1"
            style={{ animationDelay: '220ms' }}
          >
            <p>{SITE.tagline}</p>
            <p className="font-medium text-amber-700 dark:text-amber-300/90">{SITE.subtagline}</p>
          </div>

          <div
            className="hero-rise flex flex-col sm:flex-row justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mt-4"
            style={{ animationDelay: '340ms' }}
          >
            <button
              onClick={() => setShowSocial(!showSocial)}
              className="group text-white px-6 py-3 flex items-center justify-center rounded-md bg-[#0b192c] hover:bg-[#10223b] dark:bg-cyan-600 dark:hover:bg-cyan-500 cursor-pointer shadow-md shadow-navy-900/10 hover:scale-105 duration-300 font-medium"
            >
              Social Media
              <FaShareAlt size={18} className="ml-2 group-hover:scale-110 duration-300" />
            </button>

            <a
              href={SITE.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-950 px-6 py-3 flex items-center justify-center rounded-md bg-amber-400 hover:bg-amber-300 cursor-pointer hover:scale-105 duration-300 font-semibold shadow-md shadow-amber-500/20"
            >
              CV <BsFillPersonLinesFill size={20} className="ml-1.5" />
            </a>
          </div>

          {showSocial && (
            <div className="mt-4 flex justify-center md:justify-start space-x-3.5">
              {SOCIAL_LINKS.map(({ id, label, icon, href }) => {
                const Icon = SOCIAL_ICONS[icon];
                return (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center w-14 h-14 bg-white dark:bg-gray-800/90 border border-slate-200 dark:border-cyan-400/30 rounded-full text-navy-900 dark:text-white hover:scale-110 hover:border-amber-500 dark:hover:border-amber-400 shadow-sm duration-300"
                    title={label}
                  >
                    {Icon && <Icon size={22} />}
                    <span className="text-[10px] mt-0.5 font-medium">{label}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div className="hero-rise shrink-0" style={{ animationDelay: '180ms' }}>
          <div className="relative mx-auto w-60 sm:w-72 md:w-80 lg:w-96 aspect-[3/4] overflow-hidden rounded-t-[9999px] rounded-b-2xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
            <img
              src={HeroImage}
              alt={SITE.fullName}
              className="w-full h-full object-cover object-top rounded-t-[9999px] rounded-b-2xl"
            />
          </div>
        </div>
      </div>

      <ScrollLink
        to={SECTION_IDS.about}
        smooth={SCROLL.smooth}
        duration={SCROLL.duration}
        offset={-70}
        className="hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-amber-500 dark:text-cyan-300 cursor-pointer animate-bounceSoft"
      >
        <MdKeyboardArrowDown size={42} />
      </ScrollLink>
    </div>
  );
};

export default Hero;

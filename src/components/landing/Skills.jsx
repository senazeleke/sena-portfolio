import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaPython,
  FaCogs,
  FaAtom,
} from 'react-icons/fa';
import { BsCursorFill } from 'react-icons/bs';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiGraphql,
  SiPostgresql,
  SiPostman,
  SiFlask,
  SiMongodb,
  SiExpress,
  SiRedis,
  SiSocketdotio,
  SiTypescript,
  SiNestjs,
  SiMysql,
  SiRedux,
  SiCloudinary,
  SiWebrtc,
  SiVite,
  SiPnpm,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { LAYOUT, SECTION_IDS, SKILL_GROUPS } from '../../constants';
import Reveal from '../ui/Reveal';

const SKILL_ICONS = {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaPython,
  FaCogs,
  FaAtom,
  BsCursorFill,
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiGraphql,
  SiPostgresql,
  SiPostman,
  SiFlask,
  SiMongodb,
  SiExpress,
  SiRedis,
  SiSocketdotio,
  SiTypescript,
  SiNestjs,
  SiMysql,
  SiRedux,
  SiCloudinary,
  SiWebrtc,
  SiVite,
  SiPnpm,
  DiVisualstudio,
};

const Skills = () => {
  return (
    <div name={SECTION_IDS.skills} className={`relative ${LAYOUT.skillsGradient} w-full py-14 md:py-16 text-[#0b192c] dark:text-white transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-4xl font-bold section-heading">Skills</p>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group, groupIndex) => (
            <Reveal key={group.id} delay={groupIndex * 90}>
              <div className="h-full rounded-2xl bg-white dark:bg-[#0b1322] border border-slate-200/90 dark:border-white/10 shadow-sm p-6 hover:border-amber-500/60 duration-300 flex flex-col">
                <p className="text-xs uppercase tracking-[0.22em] text-amber-600 dark:text-amber-300 font-semibold">{group.id}</p>
                <h3 className="mt-2 text-2xl font-bold text-[#0b192c] dark:text-cyan-200">{group.label}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-gray-400">{group.blurb}</p>
                <div className="mt-5 max-h-64 sm:max-h-72 overflow-y-auto pr-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {group.items.map(({ icon, iconClass, title }) => {
                      const Icon = SKILL_ICONS[icon];
                      return (
                        <div
                          key={title}
                          className="flex flex-col items-center text-center rounded-xl bg-slate-50 border border-slate-200/60 dark:bg-white/5 dark:border-transparent py-3 px-1 hover:bg-slate-100 dark:hover:bg-white/10 hover:-translate-y-1 duration-300"
                        >
                          {Icon && <Icon size={28} className={iconClass} />}
                          <span className="mt-2 text-xs font-medium leading-tight text-slate-800 dark:text-slate-100">{title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

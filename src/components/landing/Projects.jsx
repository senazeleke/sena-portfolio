import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LAYOUT, PROJECTS, OTHER_PROJECTS, SECTION_IDS } from '../../constants';
import { isInternalPath } from '../../utils/links';
import Reveal from '../ui/Reveal';
import OtherProjectsModal from './OtherProjectsModal';

const TONES = {
  famcon: 'from-[#0b1c3a] via-[#10243d] to-orange-950/40',
  zetseat: 'from-cyan-900/80 via-black to-amber-900/40',
  empathia: 'from-cyan-900/80 via-black to-amber-900/40',
  donnie: 'from-slate-950 via-[#0b1c3a] to-orange-800/50',
  sevenNet: 'from-emerald-950 via-[#06241f] to-slate-900',
  officeless: 'from-indigo-950 via-[#12102a] to-slate-900',
  default: 'from-cyan-900/70 via-black to-blue-950',
};

const ProjectCard = ({
  src,
  title,
  tagline,
  demo,
  liveUrl,
  commercial,
  company,
  coverPlaceholder,
  tone = 'default',
}) => (
  <div className="relative group h-full overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/10 dark:ring-1 dark:ring-white/10 hover:border-amber-500/60 dark:hover:ring-cyan-400/50 shadow-sm dark:shadow-none hover:shadow-md duration-500 flex flex-col bg-white dark:bg-black/40">
    {src ? (
      <img
        src={src}
        alt={title}
        className="w-full h-56 object-cover object-top group-hover:scale-105 duration-700"
      />
    ) : (
      <div
        className={`w-full h-56 bg-gradient-to-br ${TONES[tone] || TONES.default} flex flex-col items-center justify-center px-6 text-center text-white`}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Case study</p>
        <p className="mt-2 text-2xl font-bold">{title}</p>
        {coverPlaceholder && (
          <p className="mt-3 text-xs text-amber-200/80 font-mono">cover.png placeholder</p>
        )}
      </div>
    )}
    <div className="px-4 py-3 border-t border-slate-100 dark:border-white/10 min-h-[4.5rem] flex flex-col justify-center">
      <h3 className="text-lg font-semibold leading-tight text-[#0b192c] dark:text-white">{title}</h3>
      {tagline && <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">{tagline}</p>}
    </div>
    <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 duration-500 flex flex-col items-center justify-center text-center p-5 text-white">
      <h3 className="text-2xl font-semibold mb-1">{title}</h3>
      {tagline && <p className="mb-4 text-sm text-gray-300">{tagline}</p>}
      <div className="flex flex-wrap gap-3 justify-center">
        {isInternalPath(demo) ? (
          <Link
            to={demo}
            className="px-5 py-2 bg-amber-500 text-slate-950 font-semibold rounded-lg hover:bg-amber-400 hover:scale-105 duration-200"
          >
            Case study
          </Link>
        ) : (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-amber-500 text-slate-950 font-semibold rounded-lg hover:bg-amber-400 duration-200"
          >
            Demo
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-500 duration-200"
          >
            Live
          </a>
        )}
        {company && (
          <span className="px-5 py-2 bg-gray-800 text-emerald-200 font-medium rounded-lg">
            {company}
          </span>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [isOtherProjectsOpen, setIsOtherProjectsOpen] = useState(false);

  return (
    <div name={SECTION_IDS.projects} className={`relative ${LAYOUT.projectsGradient} w-full text-[#0b192c] dark:text-white py-14 md:py-16 transition-colors duration-300`}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <Reveal className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold section-heading">Projects</h2>
          <p className="mt-3 text-slate-600 dark:text-gray-300 text-base md:text-lg font-medium">
            My works
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 80} className="h-full">
              <ProjectCard {...project} />
            </Reveal>
          ))}

          {/* Other Projects Card */}
          <Reveal delay={PROJECTS.length * 80} className="h-full">
            <div
              onClick={() => setIsOtherProjectsOpen(true)}
              className="relative group h-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/10 dark:ring-1 dark:ring-cyan-500/30 hover:border-amber-500/60 dark:hover:ring-amber-400/60 shadow-sm dark:shadow-none hover:shadow-md duration-500 flex flex-col bg-white dark:bg-gradient-to-br dark:from-[#0c192c] dark:via-[#111e33] dark:to-[#1c160b]"
            >
              <div className="relative w-full h-56 overflow-hidden flex items-center justify-center bg-black/40">
                {OTHER_PROJECTS?.[0]?.src ? (
                  <img
                    src={OTHER_PROJECTS[0].src}
                    alt="Other Projects"
                    className="w-full h-full object-cover object-top opacity-70 group-hover:scale-105 duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-cyan-900/40 to-amber-900/40" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-200 border border-amber-400/30">
                  {OTHER_PROJECTS?.length || 2} Projects
                </span>
                <div className="absolute inset-x-4 bottom-4 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-semibold">Explorations</p>
                  <p className="mt-1 text-2xl font-bold text-white">Other Projects</p>
                </div>
              </div>
              <div className="px-5 py-4 border-t border-slate-100 dark:border-white/10 min-h-[4.5rem] flex flex-col justify-center">
                <h3 className="text-lg font-semibold leading-tight text-[#0b192c] dark:text-white">Machine Learning & NLP</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">Landslide prediction & tweet sentiment analysis</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 duration-500 flex flex-col items-center justify-center text-center p-5 text-white">
                <h3 className="text-2xl font-semibold mb-2">Other Projects</h3>
                <p className="mb-4 text-sm text-gray-300 max-w-xs">
                  Geospatial susceptibility modeling & deep learning NLP pipelines
                </p>
                <button
                  type="button"
                  onClick={() => setIsOtherProjectsOpen(true)}
                  className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-semibold rounded-lg hover:scale-105 duration-200 shadow-md"
                >
                  View Projects ({OTHER_PROJECTS?.length || 2})
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Modal */}
        <OtherProjectsModal
          isOpen={isOtherProjectsOpen}
          onClose={() => setIsOtherProjectsOpen(false)}
        />
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaArrowLeft, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { LAYOUT, ROUTES, SECTION_IDS } from '../../constants';
import Reveal from '../ui/Reveal';
import ImageSlider from './ImageSlider';
import ShotFrame from './ShotFrame';

const ProjectCaseStudy = ({ study }) => {
  const {
    title,
    kicker,
    pitch,
    liveUrl,
    appUrl,
    apiUrl,
    owner,
    ownerUrl,
    engagement,
    video,
    contribution,
    featured,
    featuredTitle = 'Key screens',
    gallery,
    galleryTitle = 'Ordered walkthrough',
    galleryLead,
    building,
    users,
    visitSteps,
    statuses,
    differentiators,
    differentiatorsTitle = 'What makes it different',
    differentiatorsLead,
    stack,
    featureRows,
  } = study;

  return (
    <div className={`relative w-full min-h-screen ${LAYOUT.sectionGradient} text-[#0b192c] dark:text-white pt-28 pb-20 transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <Link
            to={`${ROUTES.home}#${SECTION_IDS.projects}`}
            className="inline-flex items-center gap-2 text-sm text-amber-600 dark:text-cyan-300 hover:text-amber-700 dark:hover:text-amber-300 font-semibold duration-200 mb-8"
          >
            <FaArrowLeft /> Back to projects
          </Link>
          <p className="uppercase tracking-[0.25em] text-amber-600 dark:text-cyan-300 text-xs md:text-sm font-semibold">{kicker}</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-navy-900 via-amber-600 to-yellow-600 dark:from-cyan-300 dark:via-white dark:to-amber-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg md:text-xl text-slate-700 dark:text-gray-200 leading-relaxed">{pitch}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:scale-105 duration-300 shadow-sm"
              >
                Live site <FaExternalLinkAlt size={12} />
              </a>
            )}
            {appUrl && (
              <a
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-amber-500/50 dark:border-amber-400/40 px-4 py-2 text-sm text-amber-700 dark:text-amber-200 hover:border-amber-600 duration-300 font-medium"
              >
                App <FaExternalLinkAlt size={12} />
              </a>
            )}
            {owner && (
              ownerUrl ? (
                <a
                  href={ownerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-400/10 px-4 py-2 text-sm text-emerald-800 dark:text-emerald-200 hover:border-amber-500 duration-300 font-medium"
                >
                  {owner}
                  {engagement ? ` · ${engagement}` : ''}
                  <FaExternalLinkAlt size={11} />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-400/10 px-4 py-2 text-sm text-emerald-800 dark:text-emerald-200 font-medium">
                  {owner}
                  {engagement ? ` · ${engagement}` : ''}
                </span>
              )
            )}
            {apiUrl && (
              <a
                href={apiUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-cyan-400/40 px-4 py-2 text-sm text-navy-800 dark:text-cyan-200 hover:border-amber-500 duration-300 font-medium"
              >
                API <FaExternalLinkAlt size={12} />
              </a>
            )}
          </div>
        </Reveal>

        {contribution && (
          <Reveal delay={60} className="mt-14">
            <h2 className="text-2xl md:text-3xl font-bold section-heading mb-3">{contribution.title}</h2>
            {contribution.lead && <p className="text-slate-600 dark:text-gray-300 mb-8 max-w-3xl">{contribution.lead}</p>}
            <div className="grid gap-4 md:grid-cols-3">
              {contribution.items.map((item) => (
                <div
                  key={item.focus}
                  className="rounded-2xl p-6 bg-white dark:bg-[#0b1322] border border-slate-200/90 dark:border-white/10 shadow-sm hover:border-amber-500/60 duration-300"
                >
                  <h3 className="text-xl font-bold text-amber-600 dark:text-cyan-300">{item.focus}</h3>
                  <p className="mt-3 text-slate-700 dark:text-gray-200 leading-relaxed">{item.job}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {Boolean(video?.embedUrl) && (
          <Reveal delay={80} className="mt-12">
            <div className="flex items-center gap-2 mb-4 text-amber-600 dark:text-amber-200">
              <FaPlay />
              <h2 className="text-xl font-semibold">{video.title || 'Walkthrough'}</h2>
            </div>
            <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-cyan-400/30 shadow-lg aspect-video bg-black">
              <iframe
                title={video.title || 'Project video'}
                src={video.embedUrl}
                className="h-full w-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
            {video.pageUrl && (
              <a
                href={video.pageUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-amber-600 dark:text-cyan-300 hover:text-amber-700"
              >
                Open video
              </a>
            )}
          </Reveal>
        )}

        {featureRows?.length > 0 && (
          <div className="mt-20 space-y-20">
            {featureRows.map((row, index) => {
              const imageLeft = row.layout !== 'text-left';
              return (
                <Reveal key={row.id} delay={index * 40}>
                  <div
                    className={`flex flex-col gap-8 lg:gap-12 items-center ${
                      imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className="w-full lg:w-1/2">
                      {row.src ? (
                        <figure>
                          <img
                            src={row.src}
                            alt={row.caption || row.title}
                            className="w-full rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-md object-cover"
                          />
                          <figcaption className="mt-3 text-sm text-slate-500 dark:text-gray-400">{row.caption}</figcaption>
                        </figure>
                      ) : (
                        <ShotFrame file={row.file} caption={row.caption} />
                      )}
                    </div>
                    <div className="w-full lg:w-1/2">
                      <p className="text-amber-600 dark:text-cyan-300 text-sm tracking-wide font-semibold">{row.short}</p>
                      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0b192c] dark:text-white">{row.title}</h2>
                      <p className="mt-4 text-slate-700 dark:text-gray-200 leading-relaxed text-lg">{row.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}

        {featured?.length > 0 && (
          <Reveal delay={100} className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold section-heading mb-8">{featuredTitle}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {featured.map((item) => (
                <figure
                  key={item.label}
                  className="group overflow-hidden rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-black/30 shadow-sm"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="h-52 w-full object-cover object-top group-hover:scale-105 duration-500"
                  />
                  <figcaption className="px-4 py-3 text-sm font-medium bg-slate-50 dark:bg-white/5 border-t border-slate-100 dark:border-white/10 text-[#0b192c] dark:text-white">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        )}

        {gallery?.length > 0 && (
          <Reveal delay={120} className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold section-heading mb-3">{galleryTitle}</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6">
              {galleryLead || 'Auto-advances every few seconds — hover to pause.'}
            </p>
            <ImageSlider slides={gallery} interval={3500} />
          </Reveal>
        )}

        {building && (
          <Reveal className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold section-heading mb-3">How the office works</h2>
            <p className="text-slate-600 dark:text-gray-300 mb-6 max-w-3xl">
              Think of a government building, not a single line at a bakery. The building belongs to one organization. Inside it:
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-slate-100 dark:bg-cyan-500/10 text-navy-900 dark:text-cyan-200 border-b border-slate-200 dark:border-white/10">
                  <tr>
                    <th className="px-4 py-3">Piece</th>
                    <th className="px-4 py-3">Plain meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {building.map((row, i) => (
                    <tr key={row.piece} className={i % 2 ? 'bg-slate-50/70 dark:bg-[#0b1322]/80' : 'bg-white dark:bg-[#060c18]'}>
                      <td className="px-4 py-3 font-semibold text-amber-700 dark:text-amber-200">{row.piece}</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-gray-200">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        )}

        {users && (
          <Reveal className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold section-heading mb-8">Who uses it</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {users.map((user) => (
                <div
                  key={user.who}
                  className="rounded-2xl p-6 bg-white dark:bg-[#0b1322] border border-slate-200/90 dark:border-white/10 shadow-sm hover:border-amber-500/60 duration-300"
                >
                  <h3 className="text-xl font-bold text-amber-600 dark:text-cyan-300">{user.who}</h3>
                  <p className="mt-3 text-slate-700 dark:text-gray-200 leading-relaxed">{user.job}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {visitSteps && (
          <Reveal className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold section-heading mb-8">A normal visit</h2>
            <ol className="space-y-3">
              {visitSteps.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-xl bg-white dark:bg-[#0b1322] border border-slate-200 dark:border-white/10 shadow-sm px-4 py-3"
                >
                  <span className="shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <p className="text-slate-700 dark:text-gray-100 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
            {statuses && (
              <p className="mt-6 text-sm tracking-wide text-amber-700 dark:text-amber-200 font-semibold">
                Ticket status: {statuses.join(' → ')}
              </p>
            )}
          </Reveal>
        )}

        {differentiators && (
          <Reveal className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold section-heading mb-3">{differentiatorsTitle}</h2>
            {differentiatorsLead && <p className="text-slate-600 dark:text-gray-300 mb-6 text-base">{differentiatorsLead}</p>}
            <div className="grid gap-3 md:grid-cols-2">
              {differentiators.map((item, idx) => {
                let title = '';
                let desc = item;
                if (item.includes(': ')) {
                  const parts = item.split(': ');
                  title = parts[0];
                  desc = parts.slice(1).join(': ');
                } else if (item.includes(' — ')) {
                  const parts = item.split(' — ');
                  title = parts[0];
                  desc = parts.slice(1).join(' — ');
                } else if (item.includes(' - ')) {
                  const parts = item.split(' - ');
                  title = parts[0];
                  desc = parts.slice(1).join(' - ');
                }

                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1322] p-4 text-slate-800 dark:text-gray-100 shadow-sm hover:border-amber-500/60 dark:hover:border-amber-400/60 transition-all duration-200"
                  >
                    <div className="mt-1 shrink-0 text-amber-500 dark:text-amber-400">
                      <FaCheckCircle size={18} />
                    </div>
                    <div className="text-sm md:text-base leading-relaxed">
                      {title ? (
                        <>
                          <span className="font-bold text-[#0b192c] dark:text-white mr-1.5">{title}:</span>
                          <span className="text-slate-600 dark:text-gray-300">{desc}</span>
                        </>
                      ) : (
                        <span className="text-slate-700 dark:text-gray-200 font-medium">{item}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        )}

        {stack && (
          <Reveal className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold section-heading mb-8">Tech stack</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-slate-100 dark:bg-amber-400/10 text-navy-900 dark:text-amber-200 border-b border-slate-200 dark:border-white/10">
                  <tr>
                    <th className="px-4 py-3">Layer</th>
                    <th className="px-4 py-3">Tools</th>
                  </tr>
                </thead>
                <tbody>
                  {stack.map((row, i) => (
                    <tr key={row.layer} className={i % 2 ? 'bg-slate-50/70 dark:bg-[#0b1322]/80' : 'bg-white dark:bg-[#060c18]'}>
                      <td className="px-4 py-3 font-semibold text-amber-700 dark:text-cyan-200">{row.layer}</td>
                      <td className="px-4 py-3 text-slate-700 dark:text-gray-200">{row.tools}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
};

export default ProjectCaseStudy;

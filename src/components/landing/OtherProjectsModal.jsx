import React, { useEffect, useState } from 'react';
import { FaTimes, FaExternalLinkAlt, FaSearchPlus } from 'react-icons/fa';
import { OTHER_PROJECTS } from '../../constants';

const OtherProjectsModal = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, selectedImage]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-[#0a1424] dark:to-black border border-slate-200 dark:border-white/15 shadow-2xl p-6 sm:p-8 text-[#0b192c] dark:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-slate-200 dark:border-white/10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-cyan-400">
                Research & Machine Learning
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-1 text-[#0b192c] dark:text-white">Other Projects</h2>
              <p className="text-sm text-slate-600 dark:text-gray-400 mt-1">
                Interactive ML, deep learning, and geospatial applications deployed for public evaluation.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Project List */}
          <div className="mt-6 space-y-6">
            {OTHER_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="flex flex-col md:flex-row gap-6 p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-amber-500/50 dark:hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="md:w-5/12 flex flex-col justify-center flex-shrink-0">
                  <div
                    onClick={() => setSelectedImage(project)}
                    className="group relative cursor-pointer overflow-hidden rounded-lg border border-slate-200 dark:border-white/10 bg-slate-900/5 dark:bg-black/40 flex items-center justify-center aspect-[16/10] sm:aspect-video md:aspect-[16/10] shadow-sm hover:border-amber-500/60 dark:hover:border-cyan-400/60 transition-colors"
                    title="Click to view full image in modal"
                  >
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[1px]">
                      <FaSearchPlus size={15} />
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-7/12 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-300">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-1 text-[#0b192c] dark:text-white">{project.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-gray-300 mt-3 leading-relaxed">{project.summary}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-md bg-white dark:bg-white/10 text-slate-700 dark:text-cyan-200 border border-slate-200 dark:border-white/5 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-sm font-semibold hover:scale-105 duration-200 shadow-md"
                    >
                      Live on Hugging Face <FaExternalLinkAlt size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Full-size Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div>
                <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">{selectedImage.category}</p>
                <h4 className="text-base sm:text-xl font-bold">{selectedImage.title}</h4>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative w-full max-h-[78vh] flex items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-black/60 shadow-2xl p-1 sm:p-2">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-lg"
              />
            </div>

            {/* Bottom Caption / Hint */}
            <p className="text-xs text-gray-400 mt-2 text-center">
              Click anywhere outside or press ESC to return
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default OtherProjectsModal;

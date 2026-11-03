import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelegram } from 'react-icons/bs';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { CONTACT, LAYOUT, SECTION_IDS } from '../../constants';
import Reveal from '../ui/Reveal';

const Contact = () => {
  const contactMethods = [
    {
      id: 'academic-email',
      icon: HiOutlineMail,
      iconColor: 'text-amber-600 dark:text-cyan-300',
      title: 'University Email',
      value: CONTACT.academicEmail,
      subtitle: 'Lecturing & Research',
      href: CONTACT.academicEmailHref,
    },
    {
      id: 'whatsapp',
      icon: FaWhatsapp,
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      title: 'WhatsApp',
      value: 'Chat on WhatsApp',
      subtitle: 'Direct messaging',
      href: CONTACT.whatsappUrl,
      external: true,
    },
    {
      id: 'linkedin',
      icon: FaLinkedin,
      iconColor: 'text-blue-600 dark:text-sky-400',
      title: 'LinkedIn',
      value: 'Connect on LinkedIn',
      subtitle: 'Professional network',
      href: CONTACT.linkedinUrl,
      external: true,
    },
    {
      id: 'telegram',
      icon: BsTelegram,
      iconColor: 'text-sky-500 dark:text-cyan-400',
      title: 'Telegram',
      value: 'Message on Telegram',
      subtitle: 'Quick chat',
      href: CONTACT.telegramHref,
      external: true,
    },
    {
      id: 'personal-email',
      icon: HiOutlineMail,
      iconColor: 'text-amber-500 dark:text-amber-300',
      title: 'Personal Email',
      value: CONTACT.personalEmail,
      subtitle: 'General inquiries',
      href: CONTACT.personalEmailHref,
    },
  ];

  return (
    <div name={SECTION_IDS.contact} className={`relative w-full ${LAYOUT.contactGradient} text-[#0b192c] dark:text-white py-14 md:py-16 transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="text-center">
          <h2 className="text-4xl font-bold section-heading">Contact</h2>
          <p className="mt-3 text-slate-600 dark:text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Get in touch for engineering projects, research collaborations, or teaching inquiries.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.id}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noreferrer' : undefined}
                className="group p-4 rounded-xl bg-white dark:bg-[#0b1322] border border-slate-200/90 dark:border-white/10 shadow-sm hover:border-amber-500/60 dark:hover:border-amber-400/50 hover:bg-slate-50/80 dark:hover:bg-[#101b30] duration-300 flex items-center gap-3.5"
              >
                <div className="flex-shrink-0 p-2.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 group-hover:scale-110 duration-300">
                  <Icon size={24} className={method.iconColor} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-gray-400 font-medium">{method.title}</p>
                  <p className="text-sm font-semibold text-[#0b192c] dark:text-white truncate group-hover:text-amber-600 dark:group-hover:text-cyan-200 duration-200">
                    {method.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-gray-400 truncate">{method.subtitle}</p>
                </div>
              </a>
            );
          })}
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;

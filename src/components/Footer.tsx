import React from 'react';
import { HEROISM_CONFIG, CONTACT_LINKS } from '../config/contact';
import { Icon } from '@iconify/react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#05070D] border-t border-amber-500/20 pt-10 pb-8 mt-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:crown" className="w-6 h-6 text-amber-400" />
              <span className="font-headline text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 tracking-wider">
                HEROISM
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {HEROISM_CONFIG.motto} • {HEROISM_CONFIG.tagline}
            </p>
          </div>

          {/* Social / Direct Desks */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_LINKS.telegramDm}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1527] border border-sky-500/30 text-sky-400 text-xs font-semibold hover:border-sky-400 transition-colors"
            >
              <Icon icon="mdi:telegram" className="text-base" />
              <span>@heroism2</span>
            </a>

            <a
              href={CONTACT_LINKS.telegramGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1527] border border-sky-500/30 text-sky-400 text-xs font-semibold hover:border-sky-400 transition-colors"
            >
              <Icon icon="mdi:telegram" className="text-base" />
              <span>Group Chat</span>
            </a>

            <a
              href={CONTACT_LINKS.whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1527] border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:border-emerald-400 transition-colors"
            >
              <Icon icon="mdi:whatsapp" className="text-base" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href={CONTACT_LINKS.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1527] border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:border-emerald-400 transition-colors"
            >
              <Icon icon="mdi:whatsapp" className="text-base" />
              <span>WhatsApp Group</span>
            </a>

            <a
              href={CONTACT_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1527] border border-indigo-500/30 text-indigo-400 text-xs font-semibold hover:border-indigo-400 transition-colors"
            >
              <Icon icon="ic:baseline-discord" className="text-base" />
              <span>Discord</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} HEROISM. All rights reserved. Official Portal:{' '}
            <a href={HEROISM_CONFIG.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 font-bold hover:underline">
              {HEROISM_CONFIG.website}
            </a>
          </p>
          <p className="text-[11px]">
            Lords Mobile is a registered trademark of IGG Inc. HEROISM is an independent service platform active since 2018.
          </p>
        </div>
      </div>
    </footer>
  );
};

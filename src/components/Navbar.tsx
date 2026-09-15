import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigation } from './NavigationContext';
import { HEROISM_CONFIG, CONTACT_LINKS } from '../config/contact';
import { Icon } from '@iconify/react';
import axios from 'axios';

interface HuntData {
  guild: string;
  time: number;
  requirements?: string;
  monster?: string;
}

const api = axios.create({
  baseURL: 'https://api.lordsmobilegemcalculator.com',
  timeout: 4000,
});

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [huntData, setHuntData] = useState<HuntData | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [huntError, setHuntError] = useState(false);

  const { selectedPage } = useNavigation();

  // Redesigned navigation links matching user instructions
  const navLinks = [
    { title: 'Gem Calculator', to: '/' },
    { title: 'Farm & Rein Bots', to: '/bots' },
    { title: 'War Bots x KvK', to: '/war-bots' },
    { title: 'About Us', to: '/about' },
    { title: 'Contact Us', to: '/contact' },
  ];

  // Fetch /hunt status
  useEffect(() => {
    let isMounted = true;

    const loadHunt = async () => {
      try {
        const response = await api.get('/hunt');
        const data = response.data;
        if (!data || data.time === 0 || data.time === undefined || data.time === null) {
          if (isMounted) setHuntError(true);
          return;
        }
        if (isMounted) {
          setHuntData(data);
          const targetMs = data.time < 1e10 ? data.time * 1000 : data.time;
          const diffSeconds = Math.floor((targetMs - Date.now()) / 1000);
          setCountdown(diffSeconds);
        }
      } catch (err) {
        if (isMounted) setHuntError(true);
      }
    };

    loadHunt();

    return () => {
      isMounted = false;
    };
  }, []);

  // Countdown timer ticker
  useEffect(() => {
    if (countdown === null) return;
    const interval = setInterval(() => {
      setCountdown(prev => (prev !== null ? prev - 1 : null));
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  const formatTime = (totalSeconds: number) => {
    const abs = Math.abs(totalSeconds);
    const h = Math.floor(abs / 3600);
    const m = Math.floor((abs % 3600) / 60);
    const s = abs % 60;
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${h}:${pad(m)}:${pad(s)}`;
  };

  return (
    <div className="w-full relative top-0 left-0 z-[100] flex flex-col select-none">
      
      {/* Top Main Navigation Bar */}
      <nav className="relative flex flex-row items-center justify-between z-[100] min-h-20 px-3 md:px-6 lg:px-16 bg-gradient-to-r from-[#070911] via-[#0F1527] to-[#070911] border-b border-amber-500/20 shadow-xl backdrop-blur-md">
        
        {/* Brand Logo: HEROISM */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 p-[1.5px] shadow-glow-gold group-hover:scale-105 transition-transform duration-200 shrink-0">
            <div className="w-full h-full bg-[#090C16] rounded-[10px] flex items-center justify-center text-amber-400">
              <Icon icon="lucide:crown" className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-headline text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 tracking-wider">
                HEROISM
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                2018
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 tracking-wider truncate max-w-[170px] sm:max-w-none">
              {HEROISM_CONFIG.website} • 7+ Years Trust
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-semibold font-space-grotesk text-sm xl:text-base tracking-wide transition-all duration-150 relative py-1 ${
                selectedPage === link.to
                  ? 'text-amber-400 font-bold'
                  : 'text-slate-300 hover:text-amber-300'
              }`}
            >
              {link.title}
              {selectedPage === link.to && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Right CTA Desks */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={CONTACT_LINKS.telegramGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 text-sky-400 text-xs font-semibold transition-colors"
          >
            <Icon icon="mdi:telegram" className="text-base" />
            <span>Join Telegram</span>
          </a>

          <a
            href={CONTACT_LINKS.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold transition-colors"
          >
            <Icon icon="mdi:whatsapp" className="text-base" />
            <span>VIP Group</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-amber-400 hover:bg-white/5 active:scale-95 transition-all focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-[#080B15]/98 backdrop-blur-xl border-b border-amber-500/30 shadow-2xl p-4 sm:p-6 transition-all duration-200 z-[100] ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map(link => {
              const isActive = selectedPage === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl font-space-grotesk text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.title}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-400 shadow-glow-gold" />}
                </Link>
              );
            })}

            <div className="flex flex-col gap-2 pt-3 mt-1 border-t border-white/10">
              <a
                href={CONTACT_LINKS.telegramGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sky-500/15 text-sky-300 border border-sky-500/40 font-bold text-sm hover:bg-sky-500/25 transition-colors"
              >
                <Icon icon="mdi:telegram" className="text-xl" />
                Join Telegram Community
              </a>
              <a
                href={CONTACT_LINKS.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 font-bold text-sm hover:bg-emerald-500/25 transition-colors"
              >
                <Icon icon="mdi:whatsapp" className="text-xl" />
                Join WhatsApp VIP Group
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Live Hunt Bus Boarding Banner */}
      {!huntError && huntData && countdown !== null && (
        <div className="relative flex flex-row items-center justify-center z-[90] min-h-7 px-4 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 shadow-md">
          <p className="text-[#070911] font-bold font-space-grotesk text-[11px] sm:text-[13px] tracking-wide text-center">
            {countdown >= 0 ? (
              <>
                <span className="uppercase font-extrabold bg-[#070911] text-amber-400 px-1.5 py-0.5 rounded mr-1.5">LIVE</span>
                Guild [{huntData.guild}] Boarding in{' '}
                <span className="underline decoration-black underline-offset-2">{formatTime(countdown)}</span> | Req:{' '}
                {huntData.requirements} | Target: {huntData.monster}
              </>
            ) : (
              <>
                Guild [{huntData.guild}] Boarded{' '}
                <span className="font-extrabold">{formatTime(countdown)}</span> Ago | {huntData.requirements} | {huntData.monster}
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

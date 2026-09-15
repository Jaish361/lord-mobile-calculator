import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigation } from './NavigationContext';
import { HEROISM_CONFIG, CONTACT_LINKS } from '../config/contact';
import { Icon } from '@iconify/react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { selectedPage } = useNavigation();
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { title: 'Gem Calculator', to: '/', icon: 'material-symbols:diamond-outline-rounded' },
    { title: 'Farm & Rein Bots', to: '/bots', icon: 'lucide:bot' },
    { title: 'War Bots x KvK', to: '/war-bots', icon: 'lucide:swords' },
    { title: 'About Us', to: '/about', icon: 'lucide:crown' },
    { title: 'Contact Us', to: '/contact', icon: 'lucide:message-square' },
  ];

  // Close mobile menu whenever the active route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock document body scroll when mobile navigation panel is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-[#070911] border-b border-amber-500/20 shadow-xl backdrop-blur-md select-none">
      {/* Top Header Bar */}
      <div className="relative flex flex-row items-center justify-between h-[72px] sm:h-20 px-3.5 sm:px-6 lg:px-12 bg-gradient-to-r from-[#070911] via-[#0F1527] to-[#070911]">
        
        {/* Brand Logo: HEROISM */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0 pr-2">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 p-[1.5px] shadow-glow-gold group-hover:scale-105 transition-transform duration-200 shrink-0">
            <div className="w-full h-full bg-[#090C16] rounded-[10px] flex items-center justify-center text-amber-400">
              <Icon icon="lucide:crown" className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-headline text-lg sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 tracking-wider">
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

        {/* Desktop Links (lg and up) */}
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

        {/* Right CTA Desks on Desktop / Tablet */}
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

        {/* Mobile Hamburger / Close Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(prev => !prev)}
          className="lg:hidden w-11 h-11 rounded-xl bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/30 active:scale-95 text-amber-400 flex items-center justify-center transition-all focus:outline-none shrink-0 touch-manipulation cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <Icon icon="lucide:x" className="w-6 h-6 text-amber-300" />
          ) : (
            <Icon icon="lucide:menu" className="w-6 h-6 text-amber-400" />
          )}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 bottom-0 top-[72px] sm:top-20 bg-black/75 backdrop-blur-xs z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Panel - Dedicated, Opaque, Positioned Directly Below Header */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden absolute top-full left-0 right-0 w-full z-50 bg-[#0B0F1E] border-b border-amber-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.95)] max-h-[calc(100dvh-72px)] sm:max-h-[calc(100dvh-80px)] overflow-y-auto overscroll-contain"
        >
          <div className="p-4 sm:p-5 flex flex-col gap-2">
            
            <div className="px-1 pb-1 text-[11px] font-mono uppercase tracking-wider text-slate-400">
              Navigation Menu
            </div>

            {navLinks.map(link => {
              const isActive = selectedPage === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl font-space-grotesk text-sm sm:text-base font-semibold transition-all touch-manipulation cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 font-bold shadow-glow-gold'
                      : 'text-slate-200 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-slate-400'
                    }`}>
                      <Icon icon={link.icon} className="text-lg" />
                    </div>
                    <span>{link.title}</span>
                  </div>

                  {isActive ? (
                    <span className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400 font-bold">
                      <span>Active</span>
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-glow-gold animate-pulse" />
                    </span>
                  ) : (
                    <Icon icon="lucide:chevron-right" className="w-4 h-4 text-slate-500" />
                  )}
                </Link>
              );
            })}

            {/* Official Community Desks */}
            <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-amber-500/20">
              <div className="px-1 text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Official Communities
              </div>

              <a
                href={CONTACT_LINKS.telegramGroup}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full min-h-[44px] py-3 rounded-xl bg-sky-500/15 text-sky-300 border border-sky-500/40 font-bold text-sm hover:bg-sky-500/25 active:scale-[0.98] transition-all touch-manipulation"
              >
                <Icon icon="mdi:telegram" className="text-xl text-sky-400" />
                <span>Join Telegram Community</span>
              </a>

              <a
                href={CONTACT_LINKS.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full min-h-[44px] py-3 rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 font-bold text-sm hover:bg-emerald-500/25 active:scale-[0.98] transition-all touch-manipulation"
              >
                <Icon icon="mdi:whatsapp" className="text-xl text-emerald-400" />
                <span>Join WhatsApp VIP Group</span>
              </a>
            </div>

          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

import React, { useEffect } from 'react';
import { useNavigation } from '../components/NavigationContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CONTACT_LINKS, HEROISM_CONFIG } from '../config/contact';
import { Icon } from '@iconify/react';

export const FarmReinBotsPage: React.FC = () => {
  const { setSelectedPage } = useNavigation();

  useEffect(() => {
    setSelectedPage('/bots');
  }, [setSelectedPage]);

  const reinFeatures = [
    'Relocate',
    'Shield',
    'Leave / Join Guild',
    'Recall Armies',
    'Join / Leave DA, GE & CA',
    'Send March / Send Leader',
    'Train Familiar Skill',
    'Auto Send Help / Collect Gift',
    'Auto Research, Build, Train, Heal',
    'Auto Gathering, Hunting & Supply',
  ];

  const farmFeatures = [
    'Rss Gathering',
    'Auto Shielding',
    'Auto Building',
    'Auto Mystery Box',
    'Auto Training',
    'Auto VIP Chests',
    'Auto Supplying',
    'Auto Guild Bank (HOT)',
    'Auto Shelter',
    '& More Smart Features!',
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#070911] bg-ambient-hero text-white">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Icon icon="lucide:crown" className="w-4 h-4" />
              <span>{HEROISM_CONFIG.name} BOT SOLUTIONS</span>
            </div>
            <h1 className="font-headline font-extrabold text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 tracking-tight">
              Rein Bots &amp; Farm &amp; Bank Bots
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              Play Smart. Grow Fast. Stay Ahead! Trusted by thousands of Lords Mobile players worldwide since 2018.
            </p>
          </div>

          {/* Poster Showcase & Visual Breakout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Poster Graphic (Left) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm sm:max-w-md w-full rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-glow-gold">
                <img
                  src="/images/farm-rein-bots.jpg"
                  alt="Lords Mobile Bot Solutions - Rein Bots & Farm Bots"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070911] via-transparent to-transparent opacity-30" />
              </div>
            </div>

            {/* Structured Breakdown (Right) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Two Column Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                
                {/* 1. REIN BOTS CARD */}
                <div className="p-4 sm:p-6 rounded-3xl bg-[#0F1527] border-2 border-amber-500/40 shadow-glow-gold flex flex-col justify-between space-y-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2.5 pb-3 border-b border-amber-500/20">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                        <Icon icon="lucide:shield" className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h3 className="font-headline font-bold text-lg sm:text-xl text-amber-400 tracking-wider">
                        REIN BOTS
                      </h3>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                      {reinFeatures.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-amber-400 font-bold shrink-0">»</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. FARM & BANK BOTS CARD */}
                <div className="p-4 sm:p-6 rounded-3xl bg-[#0F1527] border-2 border-cyan-500/40 shadow-glow-cyan flex flex-col justify-between space-y-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2.5 pb-3 border-b border-cyan-500/20">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                        <Icon icon="lucide:wheat" className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h3 className="font-headline font-bold text-lg sm:text-xl text-cyan-400 tracking-wider">
                        FARM &amp; BANK BOTS
                      </h3>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                      {farmFeatures.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-cyan-400 font-bold shrink-0">✔</span>
                          <span className={feat.includes('HOT') ? 'font-bold text-amber-300 flex items-center gap-1' : ''}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3 Trust Badges from poster */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="p-2.5 sm:p-4 rounded-2xl bg-[#141A30] border border-amber-500/20 text-center space-y-1">
                  <Icon icon="lucide:shield-check" className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 mx-auto" />
                  <span className="font-headline font-bold text-[10px] sm:text-sm text-white block truncate">100% SAFE</span>
                  <span className="text-[8px] sm:text-[10px] text-slate-400 block">Tested &amp; Secure</span>
                </div>

                <div className="p-2.5 sm:p-4 rounded-2xl bg-[#141A30] border border-amber-500/20 text-center space-y-1">
                  <Icon icon="lucide:clock" className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mx-auto" />
                  <span className="font-headline font-bold text-[10px] sm:text-sm text-white block truncate">24/7 ACTIVE</span>
                  <span className="text-[8px] sm:text-[10px] text-slate-400 block">Automation</span>
                </div>

                <div className="p-2.5 sm:p-4 rounded-2xl bg-[#141A30] border border-amber-500/20 text-center space-y-1">
                  <Icon icon="lucide:trending-up" className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mx-auto" />
                  <span className="font-headline font-bold text-[10px] sm:text-sm text-white block truncate">EFFICIENCY</span>
                  <span className="text-[8px] sm:text-[10px] text-slate-400 block">Rapid Growth</span>
                </div>
              </div>

              {/* Direct Order Desks */}
              <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-600/20 via-[#141A30] to-cyan-600/20 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left w-full sm:w-auto">
                  <h4 className="font-headline font-bold text-base text-white">
                    Book Your Bot Slot Today
                  </h4>
                  <p className="text-xs text-slate-300">
                    Official Telegram: <strong className="text-amber-300">@heroism2</strong> • Portal:{' '}
                    <strong className="text-cyan-300">heroismshop.in</strong>
                  </p>
                </div>

                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2 shrink-0">
                  <a
                    href={CONTACT_LINKS.telegramDm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 sm:py-3 rounded-xl bg-sky-500 hover:bg-sky-400 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all touch-manipulation"
                  >
                    <Icon icon="mdi:telegram" className="text-base" />
                    <span>Contact Telegram</span>
                  </a>

                  <a
                    href={CONTACT_LINKS.whatsappDirect}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all touch-manipulation"
                  >
                    <Icon icon="mdi:whatsapp" className="text-base" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

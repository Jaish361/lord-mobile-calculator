import React, { useEffect } from 'react';
import { useNavigation } from '../components/NavigationContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CONTACT_LINKS, HEROISM_CONFIG } from '../config/contact';
import { Icon } from '@iconify/react';

export const WarBotsKvkPage: React.FC = () => {
  const { setSelectedPage } = useNavigation();

  useEffect(() => {
    setSelectedPage('/war-bots');
  }, [setSelectedPage]);

  const botCategories = [
    { title: 'General', desc: 'All-in-one utility bots', icon: 'lucide:settings' },
    { title: 'Kingdom', desc: 'Kingdom growth & management', icon: 'lucide:castle' },
    { title: 'War & Battle', desc: 'Combat tactics & warfare bots', icon: 'lucide:swords' },
    { title: 'Migration', desc: 'Kingdom migration & scout bots', icon: 'lucide:globe' },
    { title: 'Hives & Map', desc: 'Hive & map control bots', icon: 'lucide:hexagon' },
    { title: 'Player', desc: 'Player stats & activity bots', icon: 'lucide:user' },
    { title: 'Guild', desc: 'Guild management bots', icon: 'lucide:shield' },
    { title: 'Mute & Alert', desc: 'Alert & notification bots', icon: 'lucide:bell-ring' },
    { title: 'System & Extra', desc: 'System tools & advanced bots', icon: 'lucide:wrench' },
    { title: 'Baron Feature Added', desc: 'Exclusive Baron tools & Overlord control', icon: 'lucide:crown', isHot: true },
  ];

  const trackingPillars = [
    { title: 'Target Tracking', desc: 'Lock • Analyze • Never Miss', icon: 'lucide:crosshair' },
    { title: 'Fury Trackers', desc: 'Complete Fury Dominance', icon: 'lucide:swords' },
    { title: 'Real-Time Monitoring', desc: '24/7 Live Monitoring • Perfect Execution', icon: 'lucide:eye' },
    { title: 'Performance Analytics', desc: 'Detailed Stats • Max Efficiency', icon: 'lucide:line-chart' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#070911] bg-ambient-hero text-white">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
          
          {/* Header Banner */}
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider shadow-glow-cyan">
              <Icon icon="lucide:zap" className="w-4 h-4" />
              <span>ADVANCED AI 128 • ULTIMATE WAR COMMAND</span>
            </div>
            
            <h1 className="font-headline font-black text-3xl sm:text-6xl text-white tracking-tight leading-[1.1]">
              BANGED YOUR KVK{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">
                WITH STYLES
              </span>
            </h1>

            <p className="text-base sm:text-xl text-cyan-300 font-headline font-bold tracking-wide">
              👑 THE GLORY OF WAR AWAITS — UNTOUCHABLE • UPGRADED • UNSTOPPABLE 👑
            </p>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We're offering the advanced Lords Mobile War Bots designed to single-handedly dominate your KvK and rally battlefields with zero delay.
            </p>
          </div>

          {/* Dual Posters Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Poster 1: KvK War Bot 128 */}
            <div className="rounded-3xl bg-[#0F1527] border-2 border-cyan-500/40 p-5 sm:p-6 shadow-glow-cyan space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    AI 128 FASTEST KVK BOT
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-[11px] font-bold border border-rose-500/30">
                    LIMITED SLOTS ONLY
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                  <img
                    src="/images/kvk-war-bots.jpg"
                    alt="Banged Your KvK With Styles - War Bots"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#141A30] border border-cyan-500/20 text-center">
                    <strong className="text-white block font-headline">ULTRA FASTEST SPEED</strong>
                    <span className="text-[10px] text-slate-400">Zero Lag Response</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#141A30] border border-cyan-500/20 text-center">
                    <strong className="text-white block font-headline">NON-STOP WAR PEAK</strong>
                    <span className="text-[10px] text-slate-400">Full Battle Uptime</span>
                  </div>
                </div>
              </div>

              <a
                href={CONTACT_LINKS.telegramDm}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 active:scale-95 text-white font-headline font-bold text-xs sm:text-sm tracking-wide text-center flex items-center justify-center gap-2 shadow-glow-cyan transition-all touch-manipulation"
              >
                <Icon icon="mdi:telegram" className="text-base sm:text-lg" />
                <span>DM @heroism2 FOR AI 128 WAR BOT</span>
              </a>
            </div>

            {/* Poster 2: War Bots HR Ultimate AI Command */}
            <div className="rounded-3xl bg-[#0F1527] border-2 border-amber-500/40 p-4 sm:p-6 shadow-glow-gold space-y-4 sm:space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    WAR BOTS HR COMMAND CENTER
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] sm:text-[11px] font-bold border border-amber-500/30">
                    HEROISM SINCE 2018
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                  <img
                    src="/images/war-bots-hr.jpg"
                    alt="War Bots HR - Ultimate AI Command Center"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#141A30] border border-amber-500/20 text-center">
                    <strong className="text-white block font-headline text-xs sm:text-sm">128+ ACCOUNTS SYNC</strong>
                    <span className="text-[10px] text-slate-400">Massive Army Power</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#141A30] border border-amber-500/20 text-center">
                    <strong className="text-white block font-headline text-xs sm:text-sm">STEALTH UNDETECTABLE</strong>
                    <span className="text-[10px] text-slate-400">100% Safe Mode</span>
                  </div>
                </div>
              </div>

              <a
                href={CONTACT_LINKS.whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 active:scale-95 text-[#070911] font-headline font-extrabold text-xs sm:text-sm tracking-wide text-center flex items-center justify-center gap-2 shadow-glow-gold transition-all touch-manipulation"
              >
                <Icon icon="mdi:whatsapp" className="text-base sm:text-lg" />
                <span>BOOK WAR BOTS HR VIA WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Advanced Bot Types Matrix */}
          <div className="space-y-5 sm:space-y-6">
            <div className="text-center space-y-1 sm:space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                DOMINATE EVERY ASPECT OF THE GAME
              </span>
              <h2 className="font-headline font-bold text-2xl sm:text-3xl text-white">
                Advanced Bot Types Available
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3.5">
              {botCategories.map((bot, i) => (
                <div
                  key={i}
                  className={`p-3 sm:p-4 rounded-2xl bg-[#0F1527] border text-center flex flex-col items-center justify-center space-y-1.5 sm:space-y-2 transition-transform hover:-translate-y-1 ${
                    bot.isHot 
                      ? 'border-purple-500/60 shadow-glow-royal bg-gradient-to-b from-purple-950/40 to-[#0F1527]' 
                      : 'border-white/10 hover:border-amber-500/40'
                  }`}
                >
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${
                    bot.isHot ? 'bg-purple-500/20 text-purple-300' : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    <Icon icon={bot.icon} className="w-5 h-5" />
                  </div>
                  <h4 className="font-headline font-bold text-xs sm:text-sm text-white">{bot.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">{bot.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ultimate Tracking System */}
          <div className="p-4 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0F1527] via-[#141A30] to-[#0F1527] border-2 border-cyan-500/30 space-y-4 sm:space-y-6 shadow-glow-cyan">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                LOCK • ANALYZE • NEVER MISS
              </span>
              <h3 className="font-headline font-extrabold text-xl sm:text-3xl text-white">
                Ultimate Tracking System
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
              {trackingPillars.map((tp, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-2xl bg-[#0A0D17] border border-cyan-500/20 text-center space-y-1 sm:space-y-2">
                  <Icon icon={tp.icon} className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-400 mx-auto" />
                  <h4 className="font-headline font-bold text-xs sm:text-sm text-white">{tp.title}</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-mono">{tp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Motto Call to Action */}
          <div className="p-5 sm:p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[#0F1527] to-[#05070D] border-2 border-amber-500/40 text-center space-y-5 sm:space-y-6 shadow-glow-gold">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="font-headline font-black text-xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 tracking-wider">
                YOUR VICTORY IS OUR MISSION
              </h2>
              <p className="text-xs sm:text-xl font-headline font-bold text-cyan-300">
                WE TRACK. YOU ATTACK. YOU WIN.
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono">
                Built For Champions. Powered by HEROISM (Since 2018).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none mx-auto">
              <a
                href={CONTACT_LINKS.telegramDm}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 active:scale-95 text-[#070911] font-headline font-black text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 shadow-glow-gold transition-all touch-manipulation"
              >
                <Icon icon="mdi:telegram" className="text-lg" />
                <span>BOOK WAR BOT SLOTS</span>
              </a>

              <a
                href={CONTACT_LINKS.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 rounded-xl bg-[#1E2845] hover:bg-[#253256] border border-emerald-500/40 text-emerald-300 hover:text-white active:scale-95 font-headline font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all touch-manipulation"
              >
                <Icon icon="mdi:whatsapp" className="text-lg text-emerald-400" />
                <span>JOIN VIP COMMUNITY</span>
              </a>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

import React, { useEffect } from 'react';
import { useNavigation } from '../components/NavigationContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CONTACT_LINKS, HEROISM_CONFIG } from '../config/contact';
import { Icon } from '@iconify/react';

export const AboutPage: React.FC = () => {
  const { setSelectedPage } = useNavigation();

  useEffect(() => {
    setSelectedPage('/about');
  }, [setSelectedPage]);

  const pillars = [
    {
      title: 'MM SERVICE',
      subtitle: '100% Safe & Trusted',
      icon: 'lucide:handshake',
      color: 'text-amber-400',
      desc: 'Neutral escrow protection for safe account trading and high-level castle handovers.',
    },
    {
      title: 'GEMS',
      subtitle: 'Fast Delivery',
      icon: 'material-symbols:diamond-outline-rounded',
      color: 'text-cyan-400',
      desc: 'Direct guild gift delivery with instant calculator estimations and lightning dispatch.',
    },
    {
      title: 'RSS',
      subtitle: 'All Types Available',
      icon: 'lucide:shield',
      color: 'text-purple-400',
      desc: 'Billion-tier resource packs (44444, 44442, 44440) for troop pushes and research.',
    },
    {
      title: 'DIAMONDS',
      subtitle: 'Premium Trust Service',
      icon: 'lucide:gem',
      color: 'text-blue-400',
      desc: 'Official in-game diamond top-ups loaded directly to your IGG ID with event bonuses.',
    },
    {
      title: 'BOTS',
      subtitle: 'All Types Available',
      icon: 'lucide:bot',
      color: 'text-emerald-400',
      desc: 'Rein bots, Farm & Bank bots, and 128 AI War Bots for KvK domination.',
    },
  ];

  const trustMetrics = [
    {
      title: 'Thousands of Deals Completed',
      desc: 'Completed thousands of successful verified deals with zero compromise.',
      icon: 'lucide:trending-up',
    },
    {
      title: 'Most Followers in Community',
      desc: 'Largest active member network across Telegram, Line, and WhatsApp groups.',
      icon: 'lucide:users',
    },
    {
      title: 'Strongest Trusted Network',
      desc: 'Recognized by top international guilds as the safest trade hub in Lords Mobile.',
      icon: 'lucide:shield-check',
    },
    {
      title: '7 Years Strong Legacy',
      desc: 'Active since 2018 — built on trust, verified results, and delivered with honesty.',
      icon: 'lucide:award',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#070911] bg-ambient-hero text-white">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
          
          {/* Header Title */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider shadow-glow-gold">
              <Icon icon="lucide:crown" className="w-4 h-4" />
              <span>SINCE 2018 • 7+ YEARS OF TRUST</span>
            </div>
            
            <h1 className="font-headline font-black text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 tracking-tight">
              I AM HEROISM
            </h1>

            <p className="text-base sm:text-xl font-headline font-bold text-white tracking-wide">
              {HEROISM_CONFIG.motto.toUpperCase()}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              {HEROISM_CONFIG.submotto}
            </p>
          </div>

          {/* Graphic Showcase & Story Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Poster Graphic (Left) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm sm:max-w-md w-full rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-glow-gold">
                <img
                  src="/images/heroism-about.jpg"
                  alt="I Am Heroism - 7+ Years of Trust Poster"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Narrative & Trust Pillars (Right) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              <div className="p-5 sm:p-6 rounded-3xl bg-[#0F1527] border border-amber-500/20 space-y-3 sm:space-y-4">
                <h3 className="font-headline font-bold text-xl sm:text-2xl text-white">
                  7 Years Strong Legacy Built on Trust, Delivered with Honesty
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Founded in 2018, <strong className="text-amber-400">HEROISM</strong> has grown into the biggest and strongest trusted service network in Lords Mobile history. Over the past 7+ years, we have completed thousands of successful transactions across Gems, Resources, Account Middleman Escrow, and Game Automation Bots.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Unlike fly-by-night brokers or anonymous intermediaries, HEROISM operates with absolute transparency, verified contact directories, and a 100% safe record.
                </p>
              </div>

              {/* 4 Trust Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {trustMetrics.map((tm, idx) => (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-[#0F1527] border border-white/5 space-y-1 sm:space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Icon icon={tm.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                      <h4 className="font-headline font-bold text-xs sm:text-sm text-white">{tm.title}</h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{tm.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5 Core Offerings Row */}
          <div className="space-y-5 sm:space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                COMPREHENSIVE LORDS MOBILE SERVICES
              </span>
              <h2 className="font-headline font-bold text-2xl sm:text-3xl text-white">
                What We Offer
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl bg-[#0F1527] border border-amber-500/20 hover:border-amber-500/40 transition-all text-center flex flex-col justify-between space-y-3 ${
                    idx === 4 ? 'col-span-2 sm:col-span-1 lg:col-span-1' : ''
                  }`}
                >
                  <div className="space-y-2">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto ${pillar.color}`}>
                      <Icon icon={pillar.icon} className="text-xl sm:text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-sm sm:text-base text-white">{pillar.title}</h4>
                      <span className="text-[10px] sm:text-[11px] font-mono text-amber-300 block mt-0.5">
                        {pillar.subtitle}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed pt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slogan Banner & Call to Action */}
          <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-b from-[#0F1527] via-[#141A30] to-[#070911] border-2 border-amber-500/40 text-center space-y-5 sm:space-y-6 shadow-glow-gold">
            <div className="space-y-2">
              <h2 className="font-headline font-extrabold text-xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
                DON'T TRUST WORDS — TRUST THE RESULTS
              </h2>
              <p className="text-xs sm:text-base font-headline font-bold text-slate-300 italic">
                Don't just believe, Verify &amp; See the Results Yourself!
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
                Thousands of reviews &amp; feedback from active customers worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-md sm:max-w-none mx-auto">
              <a
                href={CONTACT_LINKS.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 active:scale-95 text-[#070911] font-headline font-black text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 shadow-glow-gold transition-all touch-manipulation"
              >
                <Icon icon="lucide:globe" className="text-base sm:text-lg" />
                <span>VISIT HEROISMSHOP.IN</span>
              </a>

              <a
                href={CONTACT_LINKS.telegramDm}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-xl bg-[#1E2845] hover:bg-[#253256] active:scale-95 border border-sky-500/40 text-sky-300 hover:text-white font-headline font-bold text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all touch-manipulation"
              >
                <Icon icon="mdi:telegram" className="text-base sm:text-lg text-sky-400" />
                <span>CONTACT @HEROISM2</span>
              </a>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

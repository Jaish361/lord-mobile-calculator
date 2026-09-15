import React, { useEffect } from 'react';
import { useNavigation } from '../components/NavigationContext';
import { Navbar } from '../components/Navbar';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { Icon } from '@iconify/react';
import { HEROISM_CONFIG, CONTACT_LINKS } from '../config/contact';

export const ContactPage: React.FC = () => {
  const { setSelectedPage } = useNavigation();

  useEffect(() => {
    setSelectedPage('/contact');
  }, [setSelectedPage]);

  const directDesks = [
    {
      title: 'Telegram Support & Orders',
      icon: 'mdi:telegram',
      color: 'text-sky-400',
      borderColor: 'border-sky-500/30 hover:border-sky-400/60',
      bgColor: 'bg-sky-500/5',
      buttonBg: 'bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400',
      handle: CONTACT_LINKS.telegramHandle,
      badge: 'Fastest Response • 24/7',
      description: 'Instant gem orders, bot setup assistance, and middleman bookings.',
      link: CONTACT_LINKS.telegramDm,
      buttonText: 'Chat on Telegram',
    },
    {
      title: 'WhatsApp Direct Desk',
      icon: 'mdi:whatsapp',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
      bgColor: 'bg-emerald-500/5',
      buttonBg: 'bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400',
      handle: '+Direct WhatsApp Order',
      badge: 'Direct WhatsApp Line',
      description: 'Direct 1-on-1 communication with senior operators.',
      link: CONTACT_LINKS.whatsappDirect,
      buttonText: 'Open WhatsApp Chat',
    },
    {
      title: 'Line Primary Desk',
      icon: 'garden:line-social-fill-12',
      color: 'text-green-400',
      borderColor: 'border-green-500/30 hover:border-green-400/60',
      bgColor: 'bg-green-500/5',
      buttonBg: 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400',
      handle: CONTACT_LINKS.linePrimaryHandle,
      badge: 'Main Line ID',
      description: 'Primary customer support & daily service inquiries.',
      link: CONTACT_LINKS.linePrimary,
      buttonText: 'Add on Line (Primary)',
    },
    {
      title: 'Line Secondary Desk',
      icon: 'garden:line-social-fill-12',
      color: 'text-teal-400',
      borderColor: 'border-teal-500/30 hover:border-teal-400/60',
      bgColor: 'bg-teal-500/5',
      buttonBg: 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400',
      handle: CONTACT_LINKS.lineSecondaryHandle,
      badge: 'Backup Line ID',
      description: 'Secondary line for rapid backup inquiries and order dispatch.',
      link: CONTACT_LINKS.lineSecondary,
      buttonText: 'Add on Line (Backup)',
    },
    {
      title: 'Discord Community Server',
      icon: 'ic:baseline-discord',
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/30 hover:border-indigo-400/60',
      bgColor: 'bg-indigo-500/5',
      buttonBg: 'bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400',
      handle: 'HEROISM Discord',
      badge: 'Community & Bot Tickets',
      description: 'Open support tickets, verify bots, and view live order vouches.',
      link: CONTACT_LINKS.discord,
      buttonText: 'Join Discord Server',
    },
  ];

  const communityGroups = [
    {
      title: 'Telegram Official Group',
      tag: '@HeroismSecondGroups',
      description: 'Join hundreds of active players for stock announcements, KvK bot alerts, and flash deals.',
      icon: 'mdi:telegram',
      color: 'text-sky-400',
      link: CONTACT_LINKS.telegramGroup,
      buttonText: 'Join Telegram Community',
      buttonBg: 'bg-sky-500/20 text-sky-300 border border-sky-500/40 hover:bg-sky-500/30',
    },
    {
      title: 'WhatsApp VIP Community',
      tag: 'Official Heroism VIP Group',
      description: 'Exclusive announcements, direct updates from admins, and priority bot notifications.',
      icon: 'mdi:whatsapp',
      color: 'text-emerald-400',
      link: CONTACT_LINKS.whatsappGroup,
      buttonText: 'Join WhatsApp VIP Group',
      buttonBg: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30',
    },
  ];

  const globalChannels = [
    {
      platform: 'United States Phone',
      value: CONTACT_LINKS.phoneUs,
      icon: 'lucide:phone-call',
      href: `tel:${CONTACT_LINKS.phoneUs.replace(/[^\d+]/g, '')}`,
      type: 'Direct Call / SMS',
      flag: '🇺🇸',
    },
    {
      platform: 'India Hotline',
      value: CONTACT_LINKS.phoneIn,
      icon: 'lucide:phone-call',
      href: `tel:${CONTACT_LINKS.phoneIn.replace(/[^\d+]/g, '')}`,
      type: 'Direct Call / WhatsApp',
      flag: '🇮🇳',
    },
    {
      platform: 'WeChat / Line ID',
      value: CONTACT_LINKS.wechatLine,
      icon: 'ri:wechat-fill',
      href: CONTACT_LINKS.linePrimary,
      type: 'Chat by ID',
      flag: '🌏',
    },
    {
      platform: 'Zalo',
      value: CONTACT_LINKS.zalo,
      icon: 'simple-icons:zalo',
      href: '#',
      type: 'ID: heroism1',
      flag: '🇻🇳',
    },
    {
      platform: 'Facebook',
      value: CONTACT_LINKS.facebook,
      icon: 'mdi:facebook',
      href: 'https://facebook.com',
      type: 'Official Page',
      flag: '🌐',
    },
    {
      platform: 'VK (VKontakte)',
      value: CONTACT_LINKS.vk,
      icon: 'simple-icons:vk',
      href: 'https://vk.com/id662665937',
      type: 'Profile: id662665937',
      flag: '🇷🇺',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#070911] bg-ambient-hero text-white">
      <Navbar />

      <main className="flex-1 flex flex-col items-center py-12 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <PageHeader
          text="Official Contact Center & Verification Hub"
          subtitle="Direct desk channels, verified community groups, and global contact numbers for HEROISM."
        />

        {/* Scammer Warning Alert */}
        <div className="w-full max-w-5xl mt-6 p-4 md:p-5 rounded-2xl bg-gradient-to-r from-red-950/40 via-amber-950/30 to-red-950/40 border border-amber-500/40 shadow-xl backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
              <Icon icon="lucide:shield-alert" className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-amber-300 font-headline font-bold text-sm sm:text-base md:text-lg tracking-wide flex items-center gap-2">
                Official Anti-Scam &amp; Identity Verification Warning
              </h3>
              <p className="text-slate-300 text-xs md:text-sm mt-1 leading-relaxed">
                These are our <strong className="text-amber-200">ONLY official methods of contact</strong>. If anyone contacts you claiming to represent HEROISM with different phone numbers, Discord tags, or Telegram handles, they are <strong className="text-red-400 font-bold">100% fake scammers and impersonators</strong>. Always verify handles character-for-character before making any payment.
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-3 pt-3 border-t border-amber-500/20 text-[11px] font-mono text-amber-400/90">
                <span>✓ Website: <span className="text-white font-bold">{HEROISM_CONFIG.website}</span></span>
                <span className="hidden sm:inline">•</span>
                <span>✓ Telegram: <span className="text-white font-bold">@heroism2</span></span>
                <span className="hidden sm:inline">•</span>
                <span>✓ WhatsApp Direct Desk Active</span>
                <span className="hidden sm:inline">•</span>
                <span>✓ Active Since 2018 (7+ Years)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Direct 1-on-1 Support Desks */}
        <div className="w-full max-w-5xl mt-8 sm:mt-12">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Icon icon="lucide:message-square" className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
                Direct 1-on-1 Ordering &amp; Support Desks
              </h2>
              <p className="text-xs text-slate-400">
                Click any desk below to open a direct, encrypted conversation with our verified team.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {directDesks.map((desk, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-4 sm:p-6 flex flex-col justify-between transition-all duration-200 bg-[#0C101D] border ${desk.borderColor} ${desk.bgColor} shadow-xl hover:shadow-2xl hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl bg-white/5 border border-white/10 ${desk.color}`}>
                        <Icon icon={desk.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                        {desk.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-white">{desk.title}</h3>
                  <p className="text-xs text-amber-400 font-mono font-semibold mt-1">
                    {desk.handle}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {desk.description}
                  </p>
                </div>

                <a
                  href={desk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full min-h-[44px] mt-5 py-2.5 px-4 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 shadow-md active:scale-95 touch-manipulation ${desk.buttonBg}`}
                >
                  <Icon icon={desk.icon} className="text-base shrink-0" />
                  <span className="truncate">{desk.buttonText}</span>
                  <Icon icon="lucide:arrow-up-right" className="text-xs ml-auto shrink-0" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Official Community & VIP Groups */}
        <div className="w-full max-w-5xl mt-8 sm:mt-12">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Icon icon="lucide:users" className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
                Official Community &amp; VIP Groups
              </h2>
              <p className="text-xs text-slate-400">
                Connect with the wider player base, view daily stock updates, announcements, and hunt schedules.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {communityGroups.map((group, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-[#0E1528] to-[#0A0D18] border border-amber-500/20 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${group.color} shrink-0`}>
                        <Icon icon={group.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-headline font-bold text-base sm:text-lg text-white truncate">{group.title}</h3>
                        <span className="text-xs font-mono text-amber-400 font-semibold truncate block">{group.tag}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {group.description}
                  </p>
                </div>

                <a
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`min-h-[44px] mt-6 py-3 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 touch-manipulation ${group.buttonBg}`}
                >
                  <Icon icon={group.icon} className="text-lg shrink-0" />
                  <span className="truncate">{group.buttonText}</span>
                  <Icon icon="lucide:arrow-right" className="text-sm ml-auto shrink-0" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Global Phone Lines & Multi-Platform Desks */}
        <div className="w-full max-w-5xl mt-8 sm:mt-12">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
              <Icon icon="lucide:globe" className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-headline font-bold text-white tracking-wide">
                Global Phone Lines &amp; Direct Identifiers
              </h2>
              <p className="text-xs text-slate-400">
                Additional direct communication channels verified on official HEROISM service posters.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {globalChannels.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-[#0B0F1D] border border-white/10 hover:border-amber-500/30 transition-all duration-150 flex items-center justify-between group min-w-0"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-2xl shrink-0">{item.flag}</span>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 block uppercase tracking-wider truncate">
                      {item.platform}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate block">
                      {item.value}
                    </span>
                    <span className="text-[10px] text-amber-500/80 block mt-0.5 truncate">
                      {item.type}
                    </span>
                  </div>
                </div>

                {item.href && item.href !== '#' && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-lg bg-white/5 hover:bg-amber-500/20 text-slate-400 hover:text-amber-400 active:scale-90 transition-all shrink-0 ml-2 touch-manipulation"
                    aria-label={`Open ${item.platform}`}
                  >
                    <Icon icon="lucide:external-link" className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Guarantee Footer Note */}
        <div className="w-full max-w-5xl mt-10 sm:mt-12 text-center text-xs text-slate-400 border-t border-white/10 pt-6 sm:pt-8">
          <p className="font-semibold text-slate-300">
            HEROISM • Est. 2018 • 7+ Years of Unmatched Gaming Service &amp; Safety
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            Official website: <span className="text-amber-400 font-mono">{HEROISM_CONFIG.website}</span> • All transactions protected by verified middleman protocols.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;

import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import html2canvas from 'html2canvas';
import { Button } from './Button';
import { CONTACT_LINKS, HEROISM_CONFIG } from '../config/contact';

export interface WishlistItem {
  id: string;
  title: string;
  price: number;
  count: number;
  image?: string;
}

interface WishlistProps {
  wishlistItems: WishlistItem[];
  onRemoveItem: (id: string) => void;
  onUpdateCount?: (id: string, count: number) => void;
}

export const Wishlist: React.FC<WishlistProps> = ({
  wishlistItems = [],
  onRemoveItem,
}) => {
  const wishlistRef = useRef<HTMLDivElement>(null);
  const [isCapturing, setIsCapturing] = useState(false);

  // Calculate Total Gems
  const totalGems = wishlistItems.reduce((sum, item) => sum + item.price * item.count, 0);

  // Calculate Total Speed-Up Minutes
  const totalSpeedMinutes = wishlistItems.reduce((sum, item) => {
    let unitMinutes = 0;
    const lower = item.id.toLowerCase();
    if (lower.includes('speed')) {
      if (lower.includes('1m') && !lower.includes('15m')) unitMinutes = 1;
      else if (lower.includes('15m')) unitMinutes = 15;
      else if (lower.includes('60m') || lower.includes('1h')) unitMinutes = 60;
      else if (lower.includes('3h')) unitMinutes = 180;
      else if (lower.includes('8h')) unitMinutes = 480;
      else if (lower.includes('15h')) unitMinutes = 900;
      else if (lower.includes('24h') || lower.includes('1d')) unitMinutes = 1440;
      else if (lower.includes('3d') && !lower.includes('30d')) unitMinutes = 4320;
      else if (lower.includes('7d')) unitMinutes = 10080;
      else if (lower.includes('30d')) unitMinutes = 43200;
      return sum + unitMinutes * item.count;
    }
    return sum;
  }, 0);

  const days = Math.floor(totalSpeedMinutes / 1440);
  const hours = Math.floor((totalSpeedMinutes % 1440) / 60);
  const minutes = totalSpeedMinutes % 60;

  // Screenshot capture routine
  const takeScreenshot = async () => {
    if (!wishlistRef.current) return;
    try {
      setIsCapturing(true);
      await new Promise(resolve => setTimeout(resolve, 150));
      const canvas = await html2canvas(wishlistRef.current, {
        backgroundColor: '#0A0D17',
        useCORS: true,
        scale: 2,
        logging: false,
      });
      const dataUrl = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.download = `Heroism_Wishlist_${Date.now()}.png`;
      a.href = dataUrl;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error('Screenshot error: ', err);
      alert('Error generating screenshot.');
    } finally {
      setIsCapturing(false);
    }
  };

  const handleOpen = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div
      ref={wishlistRef}
      className="w-full h-auto flex flex-col items-center justify-start gap-4 bg-[#0F1527] rounded-3xl p-5 shadow-2xl border border-amber-500/25 overflow-visible select-none"
    >
      {/* Header */}
      <div className="w-full flex items-center justify-between pb-1 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Icon icon="lucide:crown" className="w-5 h-5 text-amber-400" />
          <h2 className="text-xl font-bold font-space-grotesk text-white">Your Wishlist</h2>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
          HEROISM
        </span>
      </div>

      {/* Cart Container */}
      <div className="w-full h-auto bg-[#141A30] rounded-2xl p-4 flex flex-col items-center justify-start gap-2 border border-white/5 overflow-visible">
        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Icon icon="material-symbols:diamond-outline-rounded" className="text-2xl text-amber-400" />
            </div>
            <p className="text-slate-400 text-xs w-48 text-center leading-relaxed">
              Select items from the categories above to build your order wishlist.
            </p>
          </div>
        ) : (
          wishlistItems.map(item => {
            const imageUrl = item.image
              ? item.image.startsWith('http')
                ? item.image
                : item.image.startsWith('/')
                  ? item.image
                  : `/${item.image}`
              : '';

            return (
              <div
                key={item.id}
                className="w-full bg-[#0F1527]/90 rounded-xl p-3 flex flex-row items-center justify-between gap-2 border border-white/5"
              >
                <div className="flex flex-row items-center gap-2.5 min-w-0 flex-1">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={item.title}
                      onError={e => {
                        const target = e.currentTarget;
                        if (!target.dataset.triedFallback && item.image && !item.image.startsWith('http')) {
                          target.dataset.triedFallback = 'true';
                          target.src = `https://images.weserv.nl/?url=www.lordsmobilegemcalculator.com${item.image.startsWith('/') ? item.image : '/' + item.image}`;
                        } else {
                          target.style.display = 'none';
                        }
                      }}
                      className="w-8 h-8 object-contain rounded-md shrink-0 drop-shadow"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-amber-500/10 rounded-md flex items-center justify-center text-xs text-amber-400 shrink-0">
                      <Icon icon="material-symbols:diamond-outline-rounded" className="text-lg text-amber-400" />
                    </div>
                  )}

                  <div className="flex flex-col text-left min-w-0 flex-1">
                    <span className="text-white text-xs font-semibold flex min-w-0 items-center">
                      <span translate="no" className="notranslate shrink-0 mr-1.5 text-amber-400 font-mono font-bold">
                        {item.count}×
                      </span>
                      <span className="truncate">{item.title}</span>
                    </span>
                    <span className="text-slate-400 text-[10px] flex items-center min-w-0 mt-0.5">
                      <span className="shrink-0">Subtotal:</span>{' '}
                      <span translate="no" className="notranslate shrink-0 ml-1 font-mono text-amber-300 font-medium">
                        {(item.price * item.count).toLocaleString('en-US')} Gems
                      </span>
                    </span>
                  </div>
                </div>

                {!isCapturing && (
                  <Button
                    type="wishlist-remove"
                    title="Remove"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    ✕
                  </Button>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Speed-Up Duration Breakdown */}
      {totalSpeedMinutes > 0 && (
        <div className="w-full bg-[#141A30]/80 rounded-2xl px-4 py-3.5 flex flex-row items-center justify-center gap-2 text-slate-200 text-xs md:text-sm border border-cyan-500/30 shadow-glow-cyan">
          <span className="text-center leading-relaxed">
            <span className="text-cyan-400 font-bold uppercase tracking-wider text-[11px] block mb-1">
              ⚡ Total Speed-Up Yield
            </span>
            <strong className="text-white font-extrabold text-base">{days}</strong> Days,{' '}
            <strong className="text-cyan-300 font-extrabold text-base">{hours}</strong> Hours,{' '}
            <strong className="text-amber-300 font-extrabold text-base">{minutes}</strong> Minutes
          </span>
        </div>
      )}

      {/* Total Gems Banner */}
      <div className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 rounded-2xl px-5 py-3.5 flex flex-row items-center justify-between shadow-glow-gold">
        <div className="flex flex-row items-center gap-2">
          <Icon icon="material-symbols:diamond-outline-rounded" className="text-2xl text-[#070911]" />
          <p className="text-[#070911] text-base font-space-grotesk font-extrabold tracking-wide">
            Total Gems
          </p>
        </div>
        <p className="text-[#070911] text-2xl font-space-grotesk font-black tracking-tight">
          {totalGems.toLocaleString('en-US')}
        </p>
      </div>

      {/* Screenshot Watermark (shown only during capture) */}
      {isCapturing && (
        <div className="w-full flex flex-col items-center justify-center pt-2 text-center border-t border-white/10">
          <div className="flex items-center gap-1.5 text-amber-400 font-extrabold text-sm">
            <Icon icon="lucide:crown" className="w-4 h-4" />
            <span>HEROISM GEM CALCULATOR</span>
          </div>
          <p className="text-slate-400 text-[10px] mt-0.5">
            © {new Date().getFullYear()} HEROISM • heroismshop.in • Official Telegram: @heroism2
          </p>
        </div>
      )}

      {/* Interactive Action & Order Buttons */}
      {!isCapturing && (
        <div className="w-full space-y-2.5 pt-1">
          {/* Screenshot button */}
          <button
            onClick={takeScreenshot}
            className="w-full min-h-[44px] bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 active:scale-[0.98] text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-glow-cyan transition-all cursor-pointer text-xs sm:text-sm touch-manipulation"
          >
            <Icon icon="boxicons:camera" className="text-lg sm:text-xl shrink-0" />
            <span>Take a screenshot</span>
          </button>

          {/* Direct Order Desks */}
          <div className="w-full flex flex-col gap-2 pt-1">
            <button
              onClick={() => handleOpen(CONTACT_LINKS.telegramDm)}
              className="w-full min-h-[44px] bg-[#0E1B33] hover:bg-[#132547] active:scale-[0.98] border border-sky-500/40 text-sky-300 hover:text-white font-semibold py-2.5 px-3.5 rounded-xl flex items-center justify-between text-xs sm:text-sm transition-all duration-150 cursor-pointer shadow-sm hover:border-sky-400 touch-manipulation"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Icon icon="mdi:telegram" className="text-lg text-sky-400 shrink-0" />
                <span className="truncate">Order via Telegram (@heroism2)</span>
              </div>
              <Icon icon="lucide:arrow-right" className="text-xs text-sky-400/80 shrink-0 ml-1.5" />
            </button>

            <button
              onClick={() => handleOpen(CONTACT_LINKS.whatsappDirect)}
              className="w-full min-h-[44px] bg-[#0A231E] hover:bg-[#0E322B] active:scale-[0.98] border border-emerald-500/40 text-emerald-300 hover:text-white font-semibold py-2.5 px-3.5 rounded-xl flex items-center justify-between text-xs sm:text-sm transition-all duration-150 cursor-pointer shadow-sm hover:border-emerald-400 touch-manipulation"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Icon icon="mdi:whatsapp" className="text-lg text-emerald-400 shrink-0" />
                <span className="truncate">Order via WhatsApp Direct</span>
              </div>
              <Icon icon="lucide:arrow-right" className="text-xs text-emerald-400/80 shrink-0 ml-1.5" />
            </button>

            <button
              onClick={() => handleOpen(CONTACT_LINKS.linePrimary)}
              className="w-full min-h-[44px] bg-[#0C2417] hover:bg-[#113421] active:scale-[0.98] border border-green-500/40 text-green-300 hover:text-white font-semibold py-2.5 px-3.5 rounded-xl flex items-center justify-between text-xs sm:text-sm transition-all duration-150 cursor-pointer shadow-sm hover:border-green-400 touch-manipulation"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Icon icon="garden:line-social-fill-12" className="text-lg text-green-400 shrink-0" />
                <span className="truncate">Order via Line Official</span>
              </div>
              <Icon icon="lucide:arrow-right" className="text-xs text-green-400/80 shrink-0 ml-1.5" />
            </button>

            <button
              onClick={() => handleOpen(CONTACT_LINKS.discord)}
              className="w-full min-h-[44px] bg-[#181836] hover:bg-[#22224D] active:scale-[0.98] border border-indigo-500/40 text-indigo-300 hover:text-white font-semibold py-2.5 px-3.5 rounded-xl flex items-center justify-between text-xs sm:text-sm transition-all duration-150 cursor-pointer shadow-sm hover:border-indigo-400 touch-manipulation"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Icon icon="ic:baseline-discord" className="text-lg text-indigo-400 shrink-0" />
                <span className="truncate">Order via Discord Server</span>
              </div>
              <Icon icon="lucide:arrow-right" className="text-xs text-indigo-400/80 shrink-0 ml-1.5" />
            </button>
          </div>

          {/* Community Group Desks */}
          <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2">
            <button
              onClick={() => handleOpen(CONTACT_LINKS.telegramGroup)}
              className="min-h-[42px] py-2 px-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[11px] sm:text-xs font-semibold hover:bg-sky-500/20 active:scale-95 flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm touch-manipulation"
            >
              <Icon icon="mdi:telegram" className="text-base shrink-0" />
              <span className="truncate">Telegram</span>
            </button>

            <button
              onClick={() => handleOpen(CONTACT_LINKS.whatsappGroup)}
              className="min-h-[42px] py-2 px-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-semibold hover:bg-emerald-500/20 active:scale-95 flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm touch-manipulation"
            >
              <Icon icon="mdi:whatsapp" className="text-base shrink-0" />
              <span className="truncate">WhatsApp VIP</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

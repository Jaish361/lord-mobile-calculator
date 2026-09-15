import React from 'react';
import { Icon } from '@iconify/react';

interface ItemRowProps {
  image?: string;
  title: string;
  price: number;
  count: number;
  onChange?: (val: number) => void;
}

export const ItemRow: React.FC<ItemRowProps> = ({
  image,
  title,
  price,
  count,
  onChange,
}) => {
  const imageUrl = image
    ? image.startsWith('http')
      ? image
      : image.startsWith('/')
        ? image
        : `/${image}`
    : '';

  const isSelected = count > 0;

  const handleStep = (delta: number) => {
    if (!onChange) return;
    onChange(Math.max(0, (count || 0) + delta));
  };

  return (
    <div
      className={`w-full rounded-2xl p-3 sm:p-4 flex flex-row items-center justify-between gap-2.5 sm:gap-4 transition-all duration-200 ${
        isSelected
          ? 'bg-[#11182E] border-2 border-amber-500/50 shadow-glow-gold'
          : 'bg-[#0B0F1D] border border-white/5 hover:border-amber-500/25 hover:bg-[#0E1428]'
      }`}
    >
      {/* Left: Item Thumbnail & Title */}
      <div className="flex flex-row items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#141A30] border border-white/10 p-1 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              onError={e => {
                const target = e.currentTarget;
                if (!target.dataset.triedFallback && image && !image.startsWith('http')) {
                  target.dataset.triedFallback = 'true';
                  target.src = `https://images.weserv.nl/?url=www.lordsmobilegemcalculator.com${image.startsWith('/') ? image : '/' + image}`;
                } else {
                  target.style.display = 'none';
                }
              }}
              className="w-full h-full object-contain rounded-lg drop-shadow"
            />
          ) : (
            <Icon icon="material-symbols:diamond-outline-rounded" className="text-lg sm:text-xl text-amber-400" />
          )}
        </div>

        <div className="flex flex-col min-w-0">
          <span className="text-white font-semibold text-xs sm:text-sm md:text-base leading-tight truncate">
            {title}
          </span>
          {isSelected && (
            <span className="text-[10px] font-mono text-amber-400 font-bold mt-0.5">
              Subtotal: {(price * count).toLocaleString('en-US')} Gems
            </span>
          )}
        </div>
      </div>

      {/* Right: Price & Stepper Input */}
      <div className="flex flex-row items-center gap-2 sm:gap-4 shrink-0">
        <div className="flex items-center gap-1 text-[11px] sm:text-xs md:text-sm font-space-grotesk font-semibold text-amber-300/90 text-right justify-end shrink-0">
          <Icon icon="material-symbols:diamond-outline-rounded" className="text-amber-400 text-xs sm:text-sm shrink-0" />
          <span>{price?.toLocaleString('en-US')}</span>
        </div>

        {/* Stepper with - and + buttons */}
        <div className="flex items-center gap-1 bg-[#141A30] p-1 rounded-xl border border-white/10 shrink-0">
          <button
            type="button"
            onClick={() => handleStep(-1)}
            disabled={count <= 0}
            className="w-8 h-8 sm:w-8 sm:h-8 rounded-lg bg-white/5 hover:bg-white/10 active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs font-bold flex items-center justify-center transition-all cursor-pointer touch-manipulation"
            aria-label="Decrease quantity"
          >
            -
          </button>

          <input
            type="number"
            min="0"
            placeholder="0"
            value={count === 0 ? '' : (count ?? '')}
            onChange={e => {
              if (!onChange) return;
              const val = e.target.valueAsNumber;
              onChange(Number.isNaN(val) ? 0 : Math.max(0, Math.floor(val)));
            }}
            onFocus={e => e.target.select()}
            className="w-11 sm:w-14 bg-transparent text-white text-center font-mono font-bold text-[16px] sm:text-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            aria-label="Quantity"
          />

          <button
            type="button"
            onClick={() => handleStep(1)}
            className="w-8 h-8 sm:w-8 sm:h-8 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 active:scale-90 text-amber-300 text-xs font-bold flex items-center justify-center transition-all cursor-pointer touch-manipulation"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

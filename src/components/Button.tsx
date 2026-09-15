import React from 'react';

export interface ButtonProps {
  type: 'calculator-selector' | 'wishlist-remove' | 'wishlist-screenshot' | 'wishlist-buy';
  selected?: boolean;
  onClick?: () => void;
  text?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  selected,
  onClick,
  text,
  children,
  icon,
  title,
  className = '',
}) => {
  if (type === 'calculator-selector') {
    return (
      <button
        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-center text-xs md:text-sm rounded-xl font-bold font-space-grotesk tracking-wide active:scale-95 transition-all duration-150 cursor-pointer ${
          selected
            ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-[#070911] shadow-glow-gold scale-[1.01] border border-amber-300'
            : 'bg-[#10162A] text-slate-300 border border-white/10 hover:border-amber-500/40 hover:text-white hover:bg-[#151D36]'
        } ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }

  if (type === 'wishlist-remove') {
    return (
      <button
        onClick={onClick}
        className={`text-red-400 hover:text-red-300 text-xs p-1 cursor-pointer transition-colors shrink-0 ${className}`}
        title={title || 'Remove'}
      >
        {children || '✕'}
      </button>
    );
  }

  if (type === 'wishlist-screenshot') {
    return (
      <button
        onClick={onClick}
        className={`w-full bg-[#17A9BE] hover:bg-background-button-selector text-white font-bold py-2.5 rounded-xl flex flex-row items-center justify-center gap-2 transition-colors cursor-pointer text-sm ${className}`}
      >
        {icon}
        {text}
      </button>
    );
  }

  if (type === 'wishlist-buy') {
    return (
      <button
        onClick={onClick}
        className={`w-full bg-background-button hover:bg-background-button-hover text-white font-semibold py-2.5 rounded-xl flex flex-row items-center justify-center gap-2 transition-colors cursor-pointer text-sm shadow ${className}`}
      >
        {icon}
        {text}
      </button>
    );
  }

  return <div>Button</div>;
};

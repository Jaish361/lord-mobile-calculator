import React from 'react';

interface PageHeaderProps {
  text: string;
  subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ text, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center max-w-3xl mx-auto px-2">
      <h1 className="font-headline font-black text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 tracking-tight leading-tight">
        {text}
      </h1>
      <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full my-1 shadow-glow-gold" />
      {subtitle && (
        <p className="text-slate-300 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-2xl px-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};

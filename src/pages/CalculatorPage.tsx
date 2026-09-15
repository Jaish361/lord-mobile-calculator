import React, { useEffect, useState } from 'react';
import { useNavigation } from '../components/NavigationContext';
import { Navbar } from '../components/Navbar';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { ItemRow } from '../components/ItemRow';
import { Wishlist, WishlistItem } from '../components/Wishlist';
import { Footer } from '../components/Footer';
import axios from 'axios';

interface ItemDef {
  id: string;
  title: string;
  price: number;
  image?: string;
}

export const CalculatorPage: React.FC = () => {
  const { setSelectedPage } = useNavigation();
  const [activeCategory, setActiveCategory] = useState<string>('speed-ups');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [itemsData, setItemsData] = useState<Record<string, ItemDef[]> | null>(null);

  // Sync selected page
  useEffect(() => {
    setSelectedPage('/');
  }, [setSelectedPage]);

  // Load items.json
  useEffect(() => {
    axios
      .get('/data/items.json')
      .then(res => setItemsData(res.data))
      .catch(err => console.error('Failed to load items data:', err));
  }, []);

  const categories = [
    { title: 'Speed Ups', id: 'speed-ups' },
    { title: 'Combat', id: 'combat' },
    { title: 'Boost', id: 'boost' },
    { title: 'Resources', id: 'resources' },
    { title: 'Chests', id: 'chests' },
    { title: 'Buildings', id: 'buildings' },
    { title: 'Familiar', id: 'familiar' },
    { title: 'Monster Hunt', id: 'monster-hunt' },
  ];

  const handleUpdateCount = (id: string, count: number) => {
    setQuantities(prev => {
      const next = { ...prev };
      if (count <= 0) {
        delete next[id];
      } else {
        next[id] = count;
      }
      return next;
    });
  };

  const handleRemoveItem = (id: string) => {
    setQuantities(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  if (!itemsData) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-text-secondary text-lg">Loading items...</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Construct current wishlist
  const wishlistItems: WishlistItem[] = Object.values(itemsData)
    .flat()
    .filter(item => (quantities[item.id] || 0) > 0)
    .map(item => ({
      ...item,
      count: quantities[item.id],
    }));

  const activeCategoryItems = itemsData[activeCategory] || [];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#070911] bg-ambient-hero text-white">
      <div>
        <Navbar />
        <main className="flex flex-col items-center justify-start py-8 sm:py-12 px-3 sm:px-6 md:px-8 lg:px-[100px] pb-28 lg:pb-12">
          <PageHeader
            text="Heroism Gem Calculator"
            subtitle="Calculate gem costs for speed-ups, combat items, chests, and resources. Generate instant watermarked order receipts for Telegram, WhatsApp, Line, or Discord."
          />

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 px-1">
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] sm:text-xs font-semibold">
              <span>👑</span>
              <span>100% Safe Gift Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] sm:text-xs font-semibold">
              <span>⚡</span>
              <span>Speed-Up Calculator</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-semibold">
              <span>📸</span>
              <span>Instant Wishlist Exporter</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-[10px] sm:text-xs font-semibold">
              <span>🛡️</span>
              <span>7+ Years Trusted Service</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mt-6 sm:mt-8 w-full max-w-[1400px] mx-auto">
            
            {/* Left: Category selector & items list */}
            <div className="w-full lg:flex-1 flex flex-col gap-4 min-w-0">
              
              {/* Category tabs: 2 even columns on mobile, 4 on tablet, flex on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-wrap gap-2 md:gap-3 bg-[#0F1527] rounded-2xl p-2.5 sm:p-5 shadow-lg border border-white/5">
                {categories.map(cat => (
                  <Button
                    key={cat.id}
                    type="calculator-selector"
                    text={cat.title}
                    selected={activeCategory === cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                  />
                ))}
              </div>

              {/* Items Rows */}
              <div className="flex flex-col gap-2.5 sm:gap-3">
                {activeCategoryItems.map(item => (
                  <ItemRow
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    count={quantities[item.id] || 0}
                    onChange={val => handleUpdateCount(item.id, val)}
                  />
                ))}
              </div>
            </div>

            {/* Right: Sticky Wishlist Sidebar */}
            <div id="wishlist" className="w-full lg:w-[380px] lg:shrink-0 lg:sticky lg:top-6 scroll-mt-6">
              <Wishlist
                wishlistItems={wishlistItems}
                onRemoveItem={handleRemoveItem}
                onUpdateCount={handleUpdateCount}
              />
            </div>
          </div>

          {/* Floating Mobile Cart Action Bar (Visible only on mobile/tablet when items are added) */}
          {wishlistItems.length > 0 && (
            <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-[#090C16]/95 backdrop-blur-xl border-t border-amber-500/30 shadow-[0_-10px_35px_rgba(0,0,0,0.85)] pb-[max(0.75rem,env(safe-area-inset-bottom))]">
              <div className="max-w-md mx-auto flex items-center justify-between gap-3">
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{wishlistItems.reduce((s, i) => s + i.count, 0)} Items Added</span>
                  </span>
                  <span className="text-amber-400 font-black font-space-grotesk text-sm sm:text-base truncate">
                    {wishlistItems.reduce((s, i) => s + i.price * i.count, 0).toLocaleString('en-US')} Gems
                  </span>
                </div>

                <button
                  onClick={() => {
                    document.getElementById('wishlist')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="min-h-[44px] px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 active:scale-95 text-[#070911] font-headline font-black text-xs sm:text-sm tracking-wide flex items-center gap-1.5 shadow-glow-gold transition-transform cursor-pointer shrink-0 touch-manipulation"
                >
                  <span>Review &amp; Order</span>
                  <span className="text-xs">↓</span>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

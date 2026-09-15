export type CategoryId = 
  | 'speed-ups'
  | 'combat'
  | 'boost'
  | 'resources'
  | 'chests'
  | 'buildings'
  | 'familiar'
  | 'monster-hunt';

export interface CategoryMeta {
  id: CategoryId;
  name: string;
  shortDesc: string;
  iconName: string;
}

export interface Item {
  id: string;
  title: string;
  price: number; // in gems
  image: string;
  category?: CategoryId;
  badge?: string;
  description?: string;
}

export interface CartItem extends Item {
  quantity: number;
}

export type Currency = 'USD' | 'GBP' | 'EUR';

export interface PricingPackage {
  title: string;
  prefix?: string;
  subtitle?: string;
  period?: string;
  priceUsd: string;
  priceGbp: string;
  priceEur?: string;
  popular?: boolean;
  features?: string[];
}

export interface PricingData {
  gems: PricingPackage[];
  resources: PricingPackage[];
  farmBots: PricingPackage[];
  diamonds: PricingPackage[];
}

export interface SpeedupDuration {
  totalMinutes: number;
  days: number;
  hours: number;
  minutes: number;
  totalEquivalentHours: number;
}

export interface OrderInsight {
  id: string;
  title: string;
  description: string;
  type: 'info' | 'war' | 'speed' | 'vip' | 'tip';
}

export interface SavedOrder {
  id: string;
  createdAt: string;
  items: CartItem[];
  totalGems: number;
  speedupDuration: SpeedupDuration;
  status: 'ready' | 'dispatched';
}

export interface ContactChannel {
  id: string;
  platform: 'telegram' | 'whatsapp' | 'discord' | 'line';
  title: string;
  handle: string;
  url: string;
  role: 'personal' | 'community' | 'partner';
  description: string;
  isPrimary?: boolean;
}

export interface HuntEvent {
  guild: string;
  time: number; // unix timestamp in seconds or ms
  requirements?: string;
  monster?: string;
  isFallback?: boolean;
}

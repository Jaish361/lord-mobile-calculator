import { CartItem, OrderInsight } from '../types';
import { calculateSpeedupDuration, calculateTotalGems } from './calculations';

export function generateCartInsights(items: CartItem[]): OrderInsight[] {
  const activeItems = items.filter(i => i.quantity > 0);
  if (activeItems.length === 0) {
    return [];
  }

  const insights: OrderInsight[] = [];
  const totalGems = calculateTotalGems(activeItems);
  const speedups = calculateSpeedupDuration(activeItems);
  const totalItemCount = activeItems.reduce((acc, i) => acc + i.quantity, 0);

  // 1. High roller / Bulk Whale volume
  if (totalGems >= 1000000) {
    insights.push({
      id: 'whale-tier',
      title: 'High-Volume Order (>1M Gems)',
      description: 'Your order qualifies for priority VIP queue fulfillment and expedited gift delivery.',
      type: 'vip',
    });
  }

  // 2. Speed-Up Intensive
  const speedItemCount = activeItems
    .filter(i => i.id.toLowerCase().includes('speed') || i.category === 'speed-ups')
    .reduce((acc, i) => acc + i.quantity, 0);

  if (speedItemCount > 0 && speedItemCount / totalItemCount >= 0.5) {
    insights.push({
      id: 'speed-heavy',
      title: 'Speed-Up Intensive Rush',
      description: `Speed-ups make up over 50% of your items (${speedups.days}d ${speedups.hours}h total). Ideal for Hell Events, 24h Challenges, and Guild Fest rushes.`,
      type: 'speed',
    });
  }

  // 3. KvK / Combat readiness
  const combatItemCount = activeItems
    .filter(i => i.id.toLowerCase().includes('shield') || i.category === 'combat' || i.id.toLowerCase().includes('boost'))
    .reduce((acc, i) => acc + i.quantity, 0);

  if (combatItemCount >= 3) {
    insights.push({
      id: 'kvk-ready',
      title: 'KvK / War Ready Pack',
      description: 'Includes combat and defensive boosts detected. Prepared for Kingdom Clash and Wonder rallies.',
      type: 'war',
    });
  }

  // 4. Monster Hunting pack
  const huntItems = activeItems.filter(i => i.category === 'monster-hunt' || i.id.toLowerCase().includes('energy'));
  if (huntItems.length >= 2) {
    insights.push({
      id: 'monster-hunt',
      title: 'Monster Bus Loadout',
      description: 'Energy packs and hunt gear detected. Perfect for boardings on high-level monster hunt buses.',
      type: 'tip',
    });
  }

  // 5. General optimization tip
  if (insights.length === 0) {
    insights.push({
      id: 'balanced-kit',
      title: 'Balanced Game Kit',
      description: 'Your selected order provides a well-rounded combination of supplies for everyday empire progression.',
      type: 'info',
    });
  }

  return insights;
}

import { CartItem, SpeedupDuration } from '../types';

/**
 * Robust speedup duration parser.
 * Safely parses item IDs and titles to extract minutes for:
 * 1m, 5m, 10m, 15m, 30m, 60m/1h, 3h, 8h, 15h, 24h/1d, 3d, 7d, 30d
 */
export function parseSpeedupMinutes(id: string, title?: string): number {
  const combined = `${id} ${title || ''}`.toLowerCase();

  // If item does not relate to speed up, return 0
  if (!combined.includes('speed')) {
    return 0;
  }

  // Exact pattern checks (ordering matters for overlaps like 1m vs 15m or 3d vs 30d)
  if (combined.includes('30d') || combined.includes('30 day') || combined.includes('30 days')) return 43200; // 30 * 1440
  if (combined.includes('7d') || combined.includes('7 day') || combined.includes('7 days')) return 10080;   // 7 * 1440
  if (combined.includes('3d') || combined.includes('3 day') || combined.includes('3 days')) return 4320;    // 3 * 1440
  if (combined.includes('24h') || combined.includes('1d') || combined.includes('24 hour') || combined.includes('1 day')) return 1440;
  if (combined.includes('15h') || combined.includes('15 hour') || combined.includes('15 hours')) return 900;
  if (combined.includes('8h') || combined.includes('8 hour') || combined.includes('8 hours')) return 480;
  if (combined.includes('3h') || combined.includes('3 hour') || combined.includes('3 hours')) return 180;
  if (combined.includes('60m') || combined.includes('1h') || combined.includes('60 min') || combined.includes('1 hour')) return 60;
  if (combined.includes('30m') || combined.includes('30 min')) return 30;
  if (combined.includes('15m') || combined.includes('15 min')) return 15;
  if (combined.includes('10m') || combined.includes('10 min')) return 10;
  if (combined.includes('5m') || combined.includes('5 min')) return 5;
  if (combined.includes('1m') || combined.includes('1 min')) return 1;

  return 0;
}

/**
 * Calculates total speed-up duration from cart items
 */
export function calculateSpeedupDuration(items: CartItem[]): SpeedupDuration {
  let totalMinutes = 0;

  for (const item of items) {
    if (item.quantity > 0) {
      const unitMinutes = parseSpeedupMinutes(item.id, item.title);
      totalMinutes += unitMinutes * item.quantity;
    }
  }

  const days = Math.floor(totalMinutes / 1440);
  const remainingAfterDays = totalMinutes % 1440;
  const hours = Math.floor(remainingAfterDays / 60);
  const minutes = remainingAfterDays % 60;
  const totalEquivalentHours = Math.floor(totalMinutes / 60);

  return {
    totalMinutes,
    days,
    hours,
    minutes,
    totalEquivalentHours,
  };
}

/**
 * Sums total gem cost for all cart items
 */
export function calculateTotalGems(items: CartItem[]): number {
  return items.reduce((acc, item) => {
    const qty = Math.max(0, item.quantity || 0);
    const price = Math.max(0, item.price || 0);
    return acc + (qty * price);
  }, 0);
}

import { Currency } from '../types';

export function formatGems(amount: number): string {
  if (isNaN(amount) || amount === null || amount === undefined) {
    return '0';
  }
  return Math.max(0, Math.floor(amount)).toLocaleString('en-US');
}

export function formatCurrency(amount: number, currency: Currency): string {
  switch (currency) {
    case 'GBP':
      return `£${amount.toFixed(2)}`;
    case 'EUR':
      return `€${amount.toFixed(2)}`;
    case 'USD':
    default:
      return `$${amount.toFixed(2)}`;
  }
}

export function generateOrderId(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `NX-${year}${month}${day}-${randomSuffix}`;
}

export function sanitizeQuantity(val: unknown): number {
  if (typeof val === 'number') {
    if (isNaN(val) || !isFinite(val) || val <= 0) return 0;
    return Math.min(99999, Math.floor(val));
  }
  if (typeof val === 'string') {
    const parsed = parseInt(val.replace(/[^\d]/g, ''), 10);
    if (isNaN(parsed) || parsed <= 0) return 0;
    return Math.min(99999, parsed);
  }
  return 0;
}

export function formatTimestamp(date: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

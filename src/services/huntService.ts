import { HuntEvent } from '../types';

const LIVE_HUNT_URL = 'https://api.lordsmobilegemcalculator.com/hunt';

/**
 * Fallback event provider ensuring the widget always provides an active or scheduled bus event
 */
function getFallbackEvent(): HuntEvent {
  // Compute next boarding window (e.g. 2 hours 15 mins from now)
  const nextTarget = Math.floor((Date.now() + (2 * 3600 + 15 * 60) * 1000) / 1000);
  return {
    guild: 'BHb / HEROISM',
    time: nextTarget,
    requirements: '6x3 Or 2x4 Or 1x5',
    monster: 'Gawrilla / Frostwing',
    isFallback: true,
  };
}

export async function fetchLiveHuntEvent(): Promise<HuntEvent> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);

  try {
    const response = await fetch(LIVE_HUNT_URL, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return getFallbackEvent();
    }

    const data = await response.json();
    if (!data || !data.guild || !data.time) {
      return getFallbackEvent();
    }

    return {
      guild: data.guild,
      time: data.time < 1e10 ? data.time : Math.floor(data.time / 1000),
      requirements: data.requirements || '6x3 Or 2x4 Or 1x5',
      monster: data.monster || 'Mystery Monster',
      isFallback: false,
    };
  } catch (_err) {
    clearTimeout(timeoutId);
    return getFallbackEvent();
  }
}

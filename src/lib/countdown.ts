export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const getCountdown = (endsAt: string, now = Date.now()): CountdownState => {
  const target = Date.parse(endsAt);
  const remainingMs = Number.isFinite(target) ? Math.max(0, target - now) : 0;
  const totalSeconds = Math.floor(remainingMs / 1000);

  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
    isExpired: !Number.isFinite(target) || remainingMs <= 0,
  };
};

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/** 남은 시간을 일·시·분·초로 나눕니다. 지난 날짜는 모두 0으로 표시합니다. */
export function getCountdown(targetTime: number, currentTime: number): Countdown {
  const secondsLeft = Math.max(0, Math.floor((targetTime - currentTime) / 1000));

  return {
    days: Math.floor(secondsLeft / 86400),
    hours: Math.floor((secondsLeft % 86400) / 3600),
    minutes: Math.floor((secondsLeft % 3600) / 60),
    seconds: secondsLeft % 60,
  };
}

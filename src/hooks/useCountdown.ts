import { useEffect, useState } from "react";
import { getCountdown } from "../utils/countdown";

/** 공개 시각까지 1초마다 갱신하며, 화면을 떠나면 타이머를 정리합니다. */
export function useCountdown(targetDate: string) {
  const targetTime = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState(() => getCountdown(targetTime, Date.now()));

  useEffect(() => {
    const updateCountdown = () => setTimeLeft(getCountdown(targetTime, Date.now()));
    updateCountdown();

    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, [targetTime]);

  return timeLeft;
}

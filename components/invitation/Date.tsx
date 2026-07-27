"use client";

import { useEffect, useMemo, useState } from "react";

const EVENT_DATE = new Date("2026-12-27T14:45:00");

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
};

function getCountdown(target: Date): Countdown {
  const diff = target.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, finished: false };
}

export default function DateSection() {
  const [countdown, setCountdown] = useState<Countdown>(() =>
    getCountdown(EVENT_DATE),
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(getCountdown(EVENT_DATE));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const formattedDate = useMemo(
    () =>
      EVENT_DATE.toLocaleDateString("es-MX", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    [],
  );

  return (
    <section className="flex flex-col items-center gap-3 m-8 text-center">
      <h2>{formattedDate}</h2>

      <p className="gap-2 font-s">
        {countdown.finished
          ? "El gran dia ya llego"
          : `${countdown.days}D · ${countdown.hours}H · ${countdown.minutes}M`}
      </p>
    </section>
  );
}

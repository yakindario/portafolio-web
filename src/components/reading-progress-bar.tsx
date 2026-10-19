"use client";

import { useEffect, useState } from "react";

export function ReadingProgressBar() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion(
          Math.min(100, Math.max(0, (currentProgress / scrollHeight) * 100))
        );
      }
    };

    window.addEventListener("scroll", updateScrollCompletion, { passive: true });
    updateScrollCompletion();

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-violet-400 to-primary z-[100] transition-all duration-75 ease-out shadow-[0_0_12px_oklch(0.72_0.19_195/60%)]"
      style={{ width: `${completion}%` }}
      role="progressbar"
      aria-valuenow={Math.round(completion)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

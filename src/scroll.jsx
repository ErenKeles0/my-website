import { useEffect, useRef } from "react";

export default function AutoAlign({
  aboutRef,
  sections = [],
  minVisiblePercent = 10,
  debounceMs = 250,
  minScrollDelta = 2
}) {
  const timeoutId = useRef(null);
  const lastScrollY = useRef(window.scrollY);
  const lastDir = useRef(0); // 1: aşağı, -1: yukarı
  const isAnimating = useRef(false);

  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  const smoothScrollTo = (targetY, duration = 500) => {
    isAnimating.current = true;
    const startY = window.scrollY;
    const dist = targetY - startY;
    let start = null;

    const step = ts => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      window.scrollTo(0, startY + dist * easeOutCubic(p));
      if (p < 1) requestAnimationFrame(step);
      else isAnimating.current = false;
    };

    requestAnimationFrame(step);
  };

  const visiblePercent = (rect, vh) => {
    const vis = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
    return (vis / vh) * 100;
  };

  const handleScroll = () => {
    if (isAnimating.current) return;

    const y = window.scrollY;
    const delta = y - lastScrollY.current;
    if (Math.abs(delta) < minScrollDelta) return;

    lastDir.current = delta > 0 ? 1 : -1;

    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      const vh = window.innerHeight;

      if (lastDir.current < 0) {
        // Yukarı kaydırma
        if (aboutRef?.current) {
          const aRect = aboutRef.current.getBoundingClientRect();
          if (visiblePercent(aRect, vh) >= minVisiblePercent) {
            smoothScrollTo(0); // About her zaman en üste
            lastScrollY.current = 0;
            return;
          }
        }

        // Yukarı kaydırmada sections arasında en yukarıdaki uygun section
        for (const s of sections) {
          const node = s?.ref?.current;
          if (!node) continue;
          const r = node.getBoundingClientRect();
          if (visiblePercent(r, vh) >= minVisiblePercent) {
            const target = window.scrollY + r.top;
            smoothScrollTo(target);
            lastScrollY.current = target;
            return;
          }
        }
      } else {
        // Aşağı kaydırma: eşiği geçen **en aşağıdaki section**
        let bestNode = null;
        let bestTop = -Infinity;

        for (const s of sections) {
          const node = s?.ref?.current;
          if (!node) continue;
          const r = node.getBoundingClientRect();
          if (visiblePercent(r, vh) >= minVisiblePercent) {
            const topAbsolute = window.scrollY + r.top;
            if (topAbsolute > bestTop) {
              bestTop = topAbsolute;
              bestNode = node;
            }
          }
        }

        if (bestNode) {
          smoothScrollTo(bestTop);
          lastScrollY.current = bestTop;
          return;
        }
      }

      lastScrollY.current = y;
    }, debounceMs);
  };

  useEffect(() => {
    const onScroll = () => handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}

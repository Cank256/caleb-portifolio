import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
    };

    function follow() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafId = requestAnimationFrame(follow);
    }
    rafId = requestAnimationFrame(follow);

    window.addEventListener("mousemove", onMove);

    /* grow ring on interactive elements */
    const selector = "a, button, .pill, .pcard, [data-cursor]";
    const addGrow = (el: Element) => {
      el.addEventListener("mouseenter", () => {
        ring.classList.add("grow");
        if (el.matches(".btn--solid, .pill, .pcard, .photo-card"))
          ring.classList.add("accent");
      });
      el.addEventListener("mouseleave", () =>
        ring.classList.remove("grow", "accent")
      );
    };
    document.querySelectorAll(selector).forEach(addGrow);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

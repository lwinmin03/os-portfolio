import { useRef } from "react";
import gsap from "gsap";

export function useWindowAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  const open = () => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, scale: 0.95, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.25,
        ease: "power3.out",
      }
    );
  };

  const close = (onDone: () => void) => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.2,
      ease: "power3.in",
      onComplete: onDone,
    });
  };

  return { ref, open, close };
}

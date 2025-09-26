"use client";
import { useRef, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Options = {
  duration?: number;
  ease?: string;
  stagger?: number;
  delay?: number;
  autoPlay?: boolean; // default: true
};

export default function useLoadingTimeline(
  options: Options = {},
  deps: React.DependencyList = []
) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const build = useCallback(() => {
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: options.duration ?? 0.5,
        ease: options.ease ?? "power3.out",
      },
      delay: options.delay ?? 0,
    });

    const items = itemRefs.current.filter(Boolean);

    if (rootRef.current) gsap.set(rootRef.current, { autoAlpha: 1 });
    if (logoRef.current) gsap.set(logoRef.current, { y: 12, autoAlpha: 0 });
    if (labelRef.current) gsap.set(labelRef.current, { y: 10, autoAlpha: 0 });
    if (items.length) gsap.set(items, { y: 12, autoAlpha: 0 });

    if (logoRef.current) tl.to(logoRef.current, { y: 0, autoAlpha: 1 }, 0);
    if (labelRef.current)
      tl.to(labelRef.current, { y: 0, autoAlpha: 1 }, "-=0.2");
    if (items.length)
      tl.to(
        items,
        { y: 0, autoAlpha: 1, stagger: options.stagger ?? 0.08 },
        "-=0.15"
      );

    return tl;
  }, [options.duration, options.ease, options.delay, options.stagger]);

  useGSAP(
    () => {
      tlRef.current?.kill();
      tlRef.current = build();
      if (options.autoPlay !== false) tlRef.current.play(0);

      return () => {
        tlRef.current?.kill();
        tlRef.current = null;
      };
    },
    {
      scope: rootRef,
      dependencies: [...deps],
    }
  );

  const registerItemRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      if (el) itemRefs.current[index] = el;
    },
    []
  );

  const play = () => tlRef.current?.play();
  const restart = () => tlRef.current?.restart();
  const rebuildAndPlay = () => {
    tlRef.current?.kill();
    tlRef.current = build();
    tlRef.current.play(0);
  };
  const kill = () => {
    tlRef.current?.kill();
    tlRef.current = null;
  };

  return {
    refs: { rootRef, logoRef, labelRef, itemRefs },
    registerItemRef,
    controls: { play, restart, rebuildAndPlay, kill, timelineRef: tlRef },
  };
}

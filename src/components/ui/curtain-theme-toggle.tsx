"use client";

import {
  useState,
  useCallback,
  useRef,
  useEffect,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import { useTheme } from "@/components/ThemeProvider";

// ─── Types ────────────────────────────────────────────────────────────────────

export type CurtainTheme = "light" | "dark";

export interface CurtainThemeToggleProps {
  /** Diameter of the icon button in px. Default: 36 */
  buttonSize?: number;
  /** Curtain animation duration in ms. Default: 550 */
  duration?: number;
  /** Additional class names for the button */
  className?: string;
}

// ─── Curtain colors ───────────────────────────────────────────────────────────

const CURTAIN_COLORS: Record<CurtainTheme, string> = {
  light: "hsl(0, 0%, 100%)",
  dark: "hsl(217, 32%, 10%)",
};

// ─── Icons ────────────────────────────────────────────────────────────────────

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

const EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

export function CurtainThemeToggle({
  buttonSize = 36,
  duration = 500,
  className,
}: CurtainThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [animating, setAnimating] = useState(false);
  const [curtainVisible, setCurtainVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const curtainColorRef = useRef<string>("");
  const curtainRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const toggle = useCallback(() => {
    if (animating) return;
    const next: CurtainTheme = resolvedTheme === "light" ? "dark" : "light";
    curtainColorRef.current = CURTAIN_COLORS[next];
    setAnimating(true);
    setCurtainVisible(true);

    // Use requestAnimationFrame to ensure the curtain element is in the DOM
    // before we start the animation
    requestAnimationFrame(() => {
      const curtain = curtainRef.current;
      if (!curtain) return;

      // Phase 1: Curtain falls from top
      curtain.style.transformOrigin = "top";
      curtain.style.transform = "scaleY(0)";
      curtain.style.transition = "none";
      curtain.style.background = curtainColorRef.current;

      // Force reflow, then animate
      curtain.getBoundingClientRect();
      curtain.style.transition = `transform ${duration}ms ${EASING}`;
      curtain.style.transform = "scaleY(1)";

      // When curtain fully covers: switch theme instantly
      setTimeout(() => {
        setTheme(next);

        // Small delay to let React re-render with new theme behind curtain
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // Phase 2: Curtain rises from bottom
            if (!curtainRef.current) return;
            curtainRef.current.style.transformOrigin = "bottom";
            curtainRef.current.style.transition = "none";
            curtainRef.current.style.transform = "scaleY(1)";

            curtainRef.current.getBoundingClientRect();
            curtainRef.current.style.transition = `transform ${duration}ms ${EASING}`;
            curtainRef.current.style.transform = "scaleY(0)";

            // Cleanup after rising animation completes
            setTimeout(() => {
              setCurtainVisible(false);
              setAnimating(false);
            }, duration + 50);
          });
        });
      }, duration);
    });
  }, [animating, resolvedTheme, duration, setTheme]);

  // ── Styles ────────────────────────────────────────────────────────────────

  const btnScale = pressed ? 0.92 : hovered ? 1.08 : 1;
  const btnStyle: CSSProperties = {
    width: buttonSize,
    height: buttonSize,
    borderRadius: "50%",
    border: "1px solid hsl(var(--border))",
    cursor: animating ? "default" : "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "hsl(var(--muted))",
    color: "hsl(var(--foreground))",
    outline: "none",
    transform: `scale(${btnScale})`,
    transition: "transform 0.15s ease",
    flexShrink: 0,
  };

  const curtainBaseStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 99999,
    pointerEvents: "none",
    transform: "scaleY(0)",
    transformOrigin: "top",
  };

  const curtainPortal = mounted && curtainVisible
    ? createPortal(
        <div ref={curtainRef} aria-hidden="true" style={curtainBaseStyle} />,
        document.body
      )
    : null;

  return (
    <>
      {curtainPortal}
      <button
        style={btnStyle}
        className={className}
        onClick={toggle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false); }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        aria-label={resolvedTheme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        aria-pressed={resolvedTheme === "dark"}
      >
        {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </>
  );
}

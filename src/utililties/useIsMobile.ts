import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile(breakpoint = MOBILE_BREAKPOINT): boolean {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = useState<boolean>(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    setIsMobile(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return isMobile;
}

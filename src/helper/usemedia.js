import { useCallback, useEffect, useState } from "react";

export const useMedia = (size = 600) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback((e) => {
    if (e.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${size}px)`);
    media.addEventListener("change", handleResize);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setIsMobile(true);
    }
  }, []);

  return isMobile;
};

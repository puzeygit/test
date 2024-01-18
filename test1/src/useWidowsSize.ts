import { useEffect, useMemo, useRef, useState } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

type WindowSizeProps = {
  windowSize: WindowSize;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1200;

type UseWindowSizeOptions = {
  needUpdateAfterEachResize?: boolean;
  breakpoints?: { mobile: number; tablet: number };
};

export const useWindowSize = (options?: UseWindowSizeOptions): WindowSizeProps => {
  const { mobile, tablet } = useMemo(
    () => options?.breakpoints ?? { mobile: MOBILE_BREAKPOINT, tablet: TABLET_BREAKPOINT },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const windowSize = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const [, setResizedTrigger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      windowSize.current = {
        width,
        height,
      };

      setIsMobile(width < mobile);
      setIsTablet(width >= mobile && width < tablet);
      setIsDesktop(width >= tablet);

      if (options?.needUpdateAfterEachResize) {
        setResizedTrigger((prev) => !prev);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [mobile, options?.needUpdateAfterEachResize, tablet]);

  return {
    windowSize: windowSize.current,
    isMobile,
    isTablet,
    isDesktop,
  };
};

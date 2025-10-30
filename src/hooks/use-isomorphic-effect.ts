import { useEffect, useLayoutEffect, useState } from 'react';

// Use useLayoutEffect on the client and useEffect on the server
export const useIsomorphicLayoutEffect = 
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Hook to detect if we're on the client side
export function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
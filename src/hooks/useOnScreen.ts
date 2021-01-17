import { useState, useEffect } from 'react';

const useOnScreen = (ref: React.MutableRefObject<HTMLElement | null>, rootMargin: string = '0px') => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    const refCurrent = ref.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }
    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

export default useOnScreen;

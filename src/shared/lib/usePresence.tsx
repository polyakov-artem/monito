import { useEffect, useState } from 'react';

export const usePresence = (
  isActive: boolean,
  onMount: () => void,
  onUnmount: () => void,
  animationDuration: number
) => {
  const [isMounted, setMounted] = useState(isActive);
  const [isPresent, setIsPresent] = useState(isActive);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const enter = () => {
      onMount();
      setMounted(true);
      timer = setTimeout(() => setIsPresent(true));
    };

    const exit = () => {
      setIsPresent(false);
      timer = setTimeout(() => {
        setMounted(false);
        onUnmount();
      }, animationDuration);
    };

    if (isActive) {
      enter();
    } else {
      exit();
    }

    return () => clearTimeout(timer);
  }, [isActive, onMount, onUnmount, animationDuration]);

  return { isMounted, isPresent };
};

import {useRef} from 'react';

type DebouncedFunction<T extends any[]> = (...args: T) => void;

export const useDebounce = <T extends any[]>(
  callback: DebouncedFunction<T>,
  delay: number,
): DebouncedFunction<T> => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

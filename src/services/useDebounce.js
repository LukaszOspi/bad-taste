import { useEffect, useCallback } from 'react';

const useDebounce = (effect, dependencies, delay) => {
  // store the provided effect in a `useCallback` hook to avoid
  // having the callback function execute on each render
  const callback = useCallback(effect, [dependencies, effect]);

  // wrap our callback function in a `setTimeout` function
  // and clear the tim out when completed
  useEffect(
    () => {
      const timeout = setTimeout(callback, delay);
      return () => clearTimeout(timeout);
    },
    // re-execute  the effect if the delay or callback changes
    [callback, delay]
  );
};

export default useDebounce;

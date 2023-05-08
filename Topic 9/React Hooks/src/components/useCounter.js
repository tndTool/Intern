import { useState, useEffect, useMemo, useCallback } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const doubleCount = useMemo(() => {
    console.log("Doubling count...");
    return count * 2;
  }, [count]);

  return { isLoading, count, increment, doubleCount };
}

export default useCounter;

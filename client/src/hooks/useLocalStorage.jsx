import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setData(stored ? JSON.parse(stored) : initialValue);
  }, [initialValue, key]);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);
  return {
    data,
    setData
  };
}

export default useLocalStorage;
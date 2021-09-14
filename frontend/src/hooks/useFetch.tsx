import React from 'react';
import { useState, useEffect, useCallback } from 'react';

type Hook = (url: string, setMenuItem: (menuItem: string) => void) => boolean;

interface IuseFetch {
  loading: boolean;
}

const useFetch: Hook = (url, setMenuItem) => {
  const [loading, setLoading] = useState(true);

  const getMenuItems = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setMenuItem(data);
    } catch (error) {
      setLoading(false);
      throw new Error("useFetch: Can't access url");
    }
  }, [url, setMenuItem]);

  useEffect(() => {
    getMenuItems();
  }, [getMenuItems]);

  return loading;
};

export default useFetch;

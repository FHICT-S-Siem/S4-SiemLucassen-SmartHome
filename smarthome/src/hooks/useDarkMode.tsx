import { useEffect, useState } from 'react';

const useLocalStorage = <T, >(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      console.log('before')
      const item = window.localStorage.getItem(key);
      console.log('after')

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value:T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
    }
  };
  return [storedValue, setValue];
};

const useDarkMode = () => {
  const initMode = false // Uses lightmode by default
  const [enabled, setEnabled] = useLocalStorage('dark-theme', initMode);
  const isEnabled = typeof enabled !== "undefined" ? enabled : initMode;

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;
    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
    console.log('wergf')
  }, [isEnabled]);

  return [enabled, setEnabled];
};

export default useDarkMode;
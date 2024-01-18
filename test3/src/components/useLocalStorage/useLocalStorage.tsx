import { omit } from 'lodash-es';

const useLocalStorage = (store = 'config') => {
  const setItem = (key: string, value: any) => {
    window.localStorage.setItem(
      store,
      JSON.stringify({
        ...JSON.parse(window.localStorage.getItem(store) || '{}'),
        [key]: value,
      })
    );
  };

  const getItem = (key: string) => {
    return JSON.parse(window.localStorage.getItem(store) || '{}')[key];
  };

  const removeItem = (key: string) => {
    window.localStorage.setItem(
      store,
      JSON.stringify(
        omit(JSON.parse(window.localStorage.getItem(store) || '{}'), key)
      )
    );
  };

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;

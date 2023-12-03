export const useLocalStorage = () => ({
  get: (key: string) => localStorage.getItem(key),
  set: <TValue extends object>(key: string, value: TValue) => {
    return localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key: string) => localStorage.removeItem(key),
});

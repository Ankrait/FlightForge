export const saveCityToLocalStorage = (key: string, value: string) => {
  const localStorageKey = "City" + key;
  localStorage.setItem(localStorageKey, value);
};

export const getCityFromLocalStorage = (key: string): string | null => {
  const localStorageKey = "City" + key;
  return localStorage.getItem(localStorageKey);
};
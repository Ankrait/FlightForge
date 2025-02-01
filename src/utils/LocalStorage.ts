import { useGetCitiesQuery } from '../store/api/otherApi/index';

export const saveCityToLocalStorage = (key: string, value: string) => {
  const localStorageKey = 'City' + key;
  localStorage.setItem(localStorageKey, value);
};

export const getCityFromLocalStorage = (key: string): string | null => {
  const localStorageKey = 'City' + key;

  const cityName = localStorage.getItem(localStorageKey);
  if (!cityName) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: cities } = useGetCitiesQuery();

    if (cities) {
      const city = cities.find(city => city.code === key);
      if (city && city.name) {
        saveCityToLocalStorage(key, city.name);
        return city.name;
      }
    }
  }
  return cityName;
};
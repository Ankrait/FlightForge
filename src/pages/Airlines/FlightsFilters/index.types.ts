export interface FiltersType {
  maxPrice: number | null;
  maxStops: number | null;
  tripClass: number | null;
  departureDateStart: string | null;
  departureDateEnd: string | null;
  returnDateStart: string | null;
  returnDateEnd: string | null;
}

export interface FiltersProps {
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
  onResetFilters: () => void;
}
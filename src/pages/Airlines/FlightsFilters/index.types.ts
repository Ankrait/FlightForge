export interface FiltersType {
  maxPrice: number | null;
  maxStops: number | null;
  tripClass: number | null;
  departureDateStart: string | null;
  departureDateEnd: string | null;
  returnDateStart: string | null;
  returnDateEnd: string | null;
}

export interface ValidationErrors {
  departureDateStart?: string;
  departureDateEnd?: string;
  returnDateStart?: string;
  returnDateEnd?: string;
}

export interface FiltersProps {
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
  onResetFilters: () => void;
  validationErrors: ValidationErrors;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
}

export interface InputProps {
  hasError?: boolean;
}
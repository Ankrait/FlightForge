import React from 'react';

import {
  Actions,
  FilterItem,
  FiltersContainer,
  Label,
  StyledButton,
  StyledErrorText,
  StyledInput,
  StyledSelect,
} from '../index.style';

import {
  handleDepartureDateEndChange,
  handleDepartureDateStartChange,
  handleResetFilters,
  handleReturnDateEndChange,
  handleReturnDateStartChange,
} from './filtersLogics';
import { FiltersProps } from './index.types';

const Filters: React.FC<FiltersProps> = ({
  filters,
  setFilters,
  onResetFilters,
  validationErrors,
  setValidationErrors,
}) => {
  return (
    <FiltersContainer>
      <FilterItem>
        <Label htmlFor="departureDateStart">Вылет с:</Label>
        <StyledInput
          id="departureDateStart"
          type="date"
          value={filters.departureDateStart || ''}
          onChange={e =>
            handleDepartureDateStartChange(e, filters, setFilters, setValidationErrors)
          }
          hasError={!!validationErrors.departureDateStart}
        />
        {validationErrors.departureDateStart && (
          <StyledErrorText>{validationErrors.departureDateStart}</StyledErrorText>
        )}
      </FilterItem>

      <FilterItem>
        <Label htmlFor="departureDateEnd">Вылет по:</Label>
        <StyledInput
          id="departureDateEnd"
          type="date"
          value={filters.departureDateEnd || ''}
          onChange={e =>
            handleDepartureDateEndChange(e, filters, setFilters, setValidationErrors)
          }
          hasError={!!validationErrors.departureDateEnd}
        />
        {validationErrors.departureDateEnd && (
          <StyledErrorText>{validationErrors.departureDateEnd}</StyledErrorText>
        )}
      </FilterItem>

      <FilterItem>
        <Label htmlFor="returnDateStart">Прилет с:</Label>
        <StyledInput
          id="returnDateStart"
          type="date"
          value={filters.returnDateStart || ''}
          onChange={e =>
            handleReturnDateStartChange(e, filters, setFilters, setValidationErrors)
          }
          hasError={!!validationErrors.returnDateStart}
        />
        {validationErrors.returnDateStart && (
          <StyledErrorText>{validationErrors.returnDateStart}</StyledErrorText>
        )}
      </FilterItem>

      <FilterItem>
        <Label htmlFor="returnDateEnd">Прилет по:</Label>
        <StyledInput
          id="returnDateEnd"
          type="date"
          value={filters.returnDateEnd || ''}
          onChange={e =>
            handleReturnDateEndChange(e, filters, setFilters, setValidationErrors)
          }
          hasError={!!validationErrors.returnDateEnd}
        />
        {validationErrors.returnDateEnd && (
          <StyledErrorText>{validationErrors.returnDateEnd}</StyledErrorText>
        )}
      </FilterItem>

      <FilterItem>
        <Label htmlFor="maxPrice">Максимальная цена:</Label>
        <StyledInput
          id="maxPrice"
          type="number"
          value={filters.maxPrice || ''}
          onChange={e => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
        />
      </FilterItem>

      <FilterItem>
        <Label htmlFor="maxStops">Число пересадок:</Label>
        <StyledSelect
          id="maxStops"
          value={filters.maxStops || ''}
          onChange={e => setFilters({ ...filters, maxStops: Number(e.target.value) })}
        >
          <option value="">Любое</option>
          <option value="1">Без пересадок</option>
          <option value="2">1 пересадка</option>
          <option value="3">2 пересадки</option>
        </StyledSelect>
      </FilterItem>

      <FilterItem>
        <Label htmlFor="tripClass">Класс перелета:</Label>
        <StyledSelect
          id="tripClass"
          value={filters.tripClass || ''}
          onChange={e => setFilters({ ...filters, tripClass: Number(e.target.value) })}
        >
          <option value="">Любой</option>
          <option value="1">Эконом</option>
          <option value="2">Бизнес</option>
          <option value="3">Первый класс</option>
        </StyledSelect>
      </FilterItem>

      <Actions>
        <StyledButton
          onClick={() =>
            handleResetFilters(onResetFilters, setFilters, filters, setValidationErrors)
          }
        >
          Сбросить фильтры
        </StyledButton>
      </Actions>
    </FiltersContainer>
  );
};

export default Filters;
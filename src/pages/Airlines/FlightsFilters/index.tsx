import React from 'react';

import { FiltersContainer, FilterItem, Label, StyledInput, StyledSelect, Actions, StyledButton } from '../index.style';

import { FiltersProps } from './index.types';

const Filters: React.FC<FiltersProps> = ({ filters, setFilters, onResetFilters }) => {
  return (
    <FiltersContainer>
      <FilterItem>
        <Label htmlFor="departureDateStart">Дата отправки (начало):</Label>
        <StyledInput
          id="departureDateStart"
          type="date"
          value={filters.departureDateStart || ''}
          onChange={(e) =>
            setFilters({ ...filters, departureDateStart: e.target.value })
          }
        />
      </FilterItem>

      <FilterItem>
        <Label htmlFor="departureDateEnd">Дата отправки (конец):</Label>
        <StyledInput
          id="departureDateEnd"
          type="date"
          value={filters.departureDateEnd || ''}
          onChange={(e) =>
            setFilters({ ...filters, departureDateEnd: e.target.value })
          }
        />
      </FilterItem>

      <FilterItem>
        <Label htmlFor="returnDateStart">Дата возвращения (начало):</Label>
        <StyledInput
          id="returnDateStart"
          type="date"
          value={filters.returnDateStart || ''}
          onChange={(e) =>
            setFilters({ ...filters, returnDateStart: e.target.value })
          }
        />
      </FilterItem>

      <FilterItem>
        <Label htmlFor="returnDateEnd">Дата возвращения (конец):</Label>
        <StyledInput
          id="returnDateEnd"
          type="date"
          value={filters.returnDateEnd || ''}
          onChange={(e) =>
            setFilters({ ...filters, returnDateEnd: e.target.value })
          }
        />
      </FilterItem>

      <FilterItem>
        <Label htmlFor="maxPrice">Максимальная цена:</Label>
        <StyledInput
          id="maxPrice"
          type="number"
          value={filters.maxPrice || ''}
          onChange={(e) =>
            setFilters({ ...filters, maxPrice: Number(e.target.value) })
          }
        />
      </FilterItem>

      <FilterItem>
        <Label htmlFor="maxStops">Число пересадок:</Label>
        <StyledSelect
          id="maxStops"
          value={filters.maxStops || ''}
          onChange={(e) =>
            setFilters({ ...filters, maxStops: Number(e.target.value) })
          }
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
          onChange={(e) =>
            setFilters({ ...filters, tripClass: Number(e.target.value) })
          }
        >
          <option value="">Любой</option>
          <option value="1">Эконом</option>
          <option value="2">Бизнес</option>
          <option value="3">Первый класс</option>
        </StyledSelect>
      </FilterItem>

      <Actions>
        <StyledButton onClick={onResetFilters}>Сбросить фильтры</StyledButton>
      </Actions>
    </FiltersContainer>
  );
};

export default Filters;
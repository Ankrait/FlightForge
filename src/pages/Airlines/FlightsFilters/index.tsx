import React from 'react';

import { FiltersProps } from './index.types';

const Filters: React.FC<FiltersProps> = ({ filters, setFilters, onResetFilters }) => {
  return (
    <div>
      <div>
        <label htmlFor="maxPrice">Максимальная цена:</label>
        <input
          id="maxPrice"
          type="number"
          value={filters.maxPrice || ''}
          onChange={(e) =>
            setFilters({ ...filters, maxPrice: Number(e.target.value) })
          }
        />
      </div>

      <div>
        <label htmlFor="maxStops">Максимальное количество пересадок:</label>
        <select
          id="maxStops"
          value={filters.maxStops || ''}
          onChange={(e) =>
            setFilters({ ...filters, maxStops: Number(e.target.value) })
          }
        >
          <option value="">Любое</option>
          <option value="0">Без пересадок</option>
          <option value="1">1 пересадка</option>
          <option value="2">2 пересадки</option>
        </select>
      </div>

      <div>
        <label htmlFor="tripClass">Класс перелета:</label>
        <select
          id="tripClass"
          value={filters.tripClass || ''}
          onChange={(e) =>
            setFilters({ ...filters, tripClass: Number(e.target.value) })
          }
        >
          <option value="">Любой</option>
          <option value="0">Эконом</option>
          <option value="1">Бизнес</option>
          <option value="2">Первый класс</option>
        </select>
      </div>

      <div>
        <label htmlFor="departureDateStart">Дата отправки (начало):</label>
        <input
          id="departureDateStart"
          type="date"
          value={filters.departureDateStart || ''}
          onChange={(e) =>
            setFilters({ ...filters, departureDateStart: e.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="departureDateEnd">Дата отправки (конец):</label>
        <input
          id="departureDateEnd"
          type="date"
          value={filters.departureDateEnd || ''}
          onChange={(e) =>
            setFilters({ ...filters, departureDateEnd: e.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="returnDateStart">Дата возвращения (начало):</label>
        <input
          id="returnDateStart"
          type="date"
          value={filters.returnDateStart || ''}
          onChange={(e) =>
            setFilters({ ...filters, returnDateStart: e.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="returnDateEnd">Дата возвращения (конец):</label>
        <input
          id="returnDateEnd"
          type="date"
          value={filters.returnDateEnd || ''}
          onChange={(e) =>
            setFilters({ ...filters, returnDateEnd: e.target.value })
          }
        />
      </div>

      <button onClick={onResetFilters}>Сбросить фильтры</button>
    </div>
  );
};

export default Filters;
import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { IAirport, ICity, ICountry } from '../../../../store/api/otherApi/index.types';
import Input from '../../../../ui-kit/Input';
import { IOrigin, OriginType } from '../types';

import { SimilarButton, SimilarList, Wrapper } from './styles';

interface ISimilar extends IOrigin {
  similarity: number;
  name: string;
}

const MAX_SIMILAR_LEN = 10;

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  a = a.toLowerCase();
  b = b.toLowerCase();

  for (let i = 0; i <= a.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= b.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
      }
    }
  }

  return 1 - matrix[a.length][b.length] / Math.max(a.length, b.length);
}

function findSimilarStrings(
  inputString: string,
  cities: ICity[],
  countries: ICountry[],
  airports: IAirport[],
) {
  const similar: ISimilar[] = [];

  const searchSimilar = (data: ICity[] | ICountry[] | IAirport[], type: OriginType) => {
    for (const el of data) {
      const similarity = Math.max(
        el.name ? levenshteinDistance(inputString, el.name) : -1,
        levenshteinDistance(inputString, el.name_translations.en),
        levenshteinDistance(inputString, el.code),
      );

      if (similarity < 0.6) continue;

      if (similar.length === MAX_SIMILAR_LEN) {
        if (similar[MAX_SIMILAR_LEN - 1].similarity < similarity) {
          similar.pop();
        } else {
          continue;
        }
      }

      similar.push({
        code: el.code,
        type,
        similarity,
        name: el.name || el.name_translations.en,
      });

      if (similar.length > 1) {
        similar.sort((a, b) => b.similarity - a.similarity);
      }
    }
  };

  searchSimilar(cities, 'city');
  searchSimilar(countries, 'country');
  searchSimilar(airports, 'airport');

  return similar;
}

interface ISearchInput {
  placeholder?: string;

  setOrigin: (value: IOrigin) => void;
  cities: ICity[];
  countries: ICountry[];
  airports: IAirport[];

  handleSelect?: () => void;
}

const SearchInput = forwardRef<HTMLInputElement, ISearchInput>(
  ({ setOrigin, handleSelect, cities, countries, airports, placeholder }, ref) => {
    const [state, setState] = useState({
      value: '',
      updateList: true,
    });
    const [currentList, setCurrentList] = useState<ISimilar[]>([]);

    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const focusedRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (!state.updateList) {
        return;
      }
      if (!state.value) return;

      const t = setTimeout(() => {
        setCurrentList(findSimilarStrings(state.value, cities, countries, airports));
      }, 600);

      return () => {
        clearTimeout(t);
      };
    }, [state.value]);

    useEffect(() => {
      if (!inputRef.current) return;

      const onKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          if (
            currentList.length === 0 ||
            (document.activeElement !== inputRef.current &&
              document.activeElement !== focusedRef.current)
          ) {
            setFocusedIndex(null);
            return;
          }

          e.preventDefault();

          setFocusedIndex(prevFocused => {
            if (e.key === 'ArrowDown') {
              console.log(prevFocused === currentList.length - 1);

              if (prevFocused === null || prevFocused === currentList.length - 1) {
                return 0;
              } else {
                return prevFocused + 1;
              }
            } else if (e.key === 'ArrowUp') {
              if (prevFocused === null || prevFocused === 0) {
                return currentList.length - 1;
              } else {
                return prevFocused - 1;
              }
            }

            return prevFocused;
          });
        }
      };

      window.addEventListener('keydown', onKeyPress);

      return () => {
        window.removeEventListener('keydown', onKeyPress);
      };
    }, [inputRef.current, currentList]);

    useEffect(() => {
      if (focusedRef.current) focusedRef.current.focus();
    }, [focusedRef.current, focusedIndex]);

    const onSelect = (val: ISimilar) => {
      setOrigin({
        code: val.code,
        type: val.type,
      });

      if (handleSelect) handleSelect();

      setState({
        value: val.name,
        updateList: false,
      });

      setCurrentList([]);
    };

    const onInputBlur = () => {
      // if (currentList.length > 0) setOrigin(currentList[0]);
      // setCurrentList([]);
    };

    return (
      <Wrapper>
        <Input
          onBlur={onInputBlur}
          ref={el => {
            inputRef.current = el;
            if (ref) {
              if ('current' in ref) {
                ref.current = el;
              } else {
                ref(el);
              }
            }
          }}
          placeholder={placeholder}
          value={state.value}
          onChange={e => setState({ value: e.target.value, updateList: true })}
        />
        <SimilarList opened={currentList.length > 0}>
          {currentList.map((el, i) => (
            <SimilarButton
              ref={focusedIndex === i ? focusedRef : undefined}
              tabIndex={-1}
              onClick={() => onSelect(el)}
              key={el.code + el.type}
              type="button"
            >
              {el.name} - {el.type}
            </SimilarButton>
          ))}
        </SimilarList>
      </Wrapper>
    );
  },
);

export default SearchInput;

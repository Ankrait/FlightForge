import styled from '@emotion/styled';

interface IFlex {
  dir?: 'column' | 'row';
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  gap?: number | string;
}

const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${p => p.dir || 'row'};
  align-items: ${p => p.align || 'stretch'};
  justify-content: ${p => p.justify || 'flex-start'};
  gap: ${p => (typeof p.gap === 'number' ? `${p.gap}px` : p.gap || '8px')};
`;

export default Flex;

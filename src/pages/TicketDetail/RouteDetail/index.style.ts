import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledSection = styled.section`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 5%;
`;

export const StyledFlightHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledFlightDetail = styled.div`
  font-size: 1.1rem;
  color: #333; 
`;

export const StyledFlightDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

export const StyledFlightDate = styled.div`
  font-size: 18px;
`;
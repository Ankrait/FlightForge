import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const FlightsContainer = styled.div`
  margin: 20px 0 20px 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px; 
  padding-top: 20px;
  height: auto; 
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 38dvh;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03); 
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); 
  }
`;

export const CardHeader = styled.h3`
  margin: 7px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
`;

export const CardContent = styled.p`
  margin: 7px;
  flex-grow: 1;
`;

export const CardDateContent = styled.p`
  margin: 7px;
  flex-grow: 1;
  color: grey;
  font-size: 14px;
`;

export const CityInfo = styled.div`
  display: flex;
  align-items: center; 
  gap: 10px; 
`;

export const FlagImage = styled.img`
  width: 24px; 
  height: auto; 
  max-width: 20px; 
  max-height: 15px;
`;
import styled from "@emotion/styled"; 
import { Link } from "react-router-dom";

export const FlightsContainer = styled.div`
  margin: 20px 0 20px 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding-top: 20px;
  height: auto;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  word-wrap: break-word;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03); 
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); 
  }
`;

export const ContentContainer = styled.div`
  margin: 0 auto 7px 10px;
`;

export const CardHeader = styled.h3`
  margin: 7px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
`;

export const CardContent = styled.p`
  margin: 7px;
  padding-bottom: 10px;
  flex-grow: 1;
  display: flex;
`;

export const CardDateContent = styled.p`
  margin: 7px;
  flex-grow: 1;
  display: flex;
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

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit
`;
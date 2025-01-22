import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const FlightsContainer = styled.div`
  margin: 20px 0 20px 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 карточки в каждой строке */
  gap: 30px; /* Отступы между карточками */
  padding-top: 20px;
  height: auto; /* Высота контейнера будет автоматически подстраиваться */
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

  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Плавный переход для transform и box-shadow */

  &:hover {
    transform: scale(1.03); /* Увеличение размера на 3% */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2); /* Увеличение тени при наведении */
  }
`;

export const CardHeader = styled.h3`
  margin: 7px;
  font-size: 18px;
`;

export const CardContent = styled.p`
  margin: 7px;
  flex-grow: 1;
`;

export const CardFooter = styled(Link)`
  background-color: #007bff;
  color: white;
  padding: 10px 10px 10px 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block; 
  text-align: center; 
  
  &:hover {
    background-color: #0056b3;
  }
`;
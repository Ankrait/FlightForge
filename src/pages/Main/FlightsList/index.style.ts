import styled from "@emotion/styled";

export const FlightsContainer = styled.div`
  margin: 20px 0 20px 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 карточки в каждой строке */
  gap: 50px 30px; /* Отступы между карточками */
  padding-top: 20px;
  height: auto; /* Высота контейнера будет автоматически подстраиваться */
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 3px;
  border: 1px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
`;

export const CardHeader = styled.h3`
  margin: 7px;
  font-size: 18px;
`;

export const CardContent = styled.p`
  margin: 7px;
  flex-grow: 1;
`;

export const CardFooter = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 10px 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;
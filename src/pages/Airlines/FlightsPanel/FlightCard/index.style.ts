import styled from '@emotion/styled';

export const Card = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 80%;
    margin-top: 16px;
`;

export const CardHeader = styled.h3`
  margin: 7px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
`;

export const CardDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    gap: 16px;
    margin: 16px 7px 7px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr; 
    }
`;


export const FlightCard = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

// Заголовок карточки (маршрут и даты)
export const FlightHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

// Блок с маршрутом
export const FlightRoute = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

// Даты отправления и возвращения
export const FlightDate = styled.div`
  font-size: 14px;
  color: #666;
    display: flex;
  flex-direction: column;
`;

// Детали рейса (класс, платформа, пересадки и расстояние)
export const FlightDetails = styled.div`
  margin-bottom: 20px;
`;

export const FlightDetail = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

export const FlightClassSpan = styled.span`
  font-weight: bold;
`;

export const FlightGateSpan = styled.span`
  font-weight: bold;
`;

export const FlightChangesSpan = styled.span`
  font-weight: bold;
`;

export const FlightDistanceSpan = styled.span`
  font-weight: bold;
`;

// Футер с ценой и датой нахождения предложения
export const FlightFooter = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: center;
`;

export const FlightPrice = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #28a745;
`;

export const FlightFoundAt = styled.div`
  font-size: 12px;
  color: #999;
`;
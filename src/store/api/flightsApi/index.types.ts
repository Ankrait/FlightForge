export interface FlightDetails {
  origin: string;        // Код города отправления, например "MOW"
  destination: string;   // Код города назначения, например "AER"
  price: number;         // Цена рейса
  transfers: number;     // Количество пересадок
  airline: string;       // Код авиакомпании, например "WZ"
  flight_number: number; // Номер рейса
  departure_at: string; // Время отправления, например "2016-03-08T16:35:00Z"
  return_at: string;    // Время возвращения, например "2016-03-17T16:05:00Z"
  expires_at: string;   // Время, до которого действителен билет, например "2016-02-22T09:32:44Z"
}
  
export interface ApiResponse {
    success: boolean;    
    data: {
      [key: string]: FlightDetails;  
    };
    error: string | null; 
    currency: string;     
}

export interface FlightData
{
  origin: string; // Точка отправления, например, "MOW".
  destination: string; // Пункт назначения, например, "AER".
  show_to_affiliates: boolean; // False - все цены, true - цены, найденные с использованием партнерского маркера.
  trip_class: number; // Класс полета: 0 - эконом, 1 - бизнес, 2 - первый класс.
  depart_date: string; // Дата отправления, например, "2023-01-15".
  return_date: string; // Дата возвращения, например, "2023-01-22".
  gate: string;// Платформа или агент, через которого был найден билет, например, "Мой Агент" или "Авиасейлс".
  number_of_changes: number; // Количество пересадок.
  value: number; // Стоимость рейса в указанной валюте.
  found_at: string; // Время и дата, когда был найден билет, например, "2023-01-01T12:00:00Z".
  distance: number; // Расстояние между точкой отправления и пунктом назначения в километрах.
  actual: boolean; // Указывает, актуально ли предложение.
}

export interface FlightDataResponse {
  success: boolean;
  data: {
    [key: string]: FlightData;
  };
  error: string | null;
  currency: string;
}
  
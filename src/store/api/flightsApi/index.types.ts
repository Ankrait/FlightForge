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
  
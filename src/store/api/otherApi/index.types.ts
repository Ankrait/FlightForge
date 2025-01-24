export interface ICountry {
  code: string;
  name: string;
  currency: string;
}

export interface ICity {
  code: string;
  name: string;
  coordinates: {
    lon: number;
    lat: number;
  };
  time_zone: string;
  country_code: string;
  has_flightable_airport: boolean;
}

export interface IAirport {
  code: string;
  name: string;
  coordinates: {
    lon: number;
    lat: number;
  };
  time_zone: string;
  country_code: string;
  city_code: string;
  flightable: boolean;
}

// TODO - добавить русский язык
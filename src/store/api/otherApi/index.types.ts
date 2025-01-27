interface INameTranslations {
  en: string;
}

export interface ICountry {
  code: string;
  name: string | null;
  name_translations: INameTranslations;
  currency: string;
}

export interface ICity {
  code: string;
  name: string | null;
  name_translations: INameTranslations;
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
  name: string | null;
  name_translations: INameTranslations;
  coordinates: {
    lon: number;
    lat: number;
  };
  time_zone: string;
  country_code: string;
  city_code: string;
  flightable: boolean;
}

export interface IAirline {
  name_translations: {
    en: string
  },
  code: string,
  name: string,
  is_lowcost: boolean
}

// TODO - добавить русский язык

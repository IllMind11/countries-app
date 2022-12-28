export type countriesDataTypes = {
  capital: string[];
  flags: string[];
  population: number;
  region: string;
  name: {
    official: string;
    common: string;
  };
};

export type countryDetailsTypes = {
  capital: string[];
  flags: {
    svg: string;
    png: string;
  };
  borders: string[];
  population: number;
  region: string;
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  name: {
    official: string;
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
};

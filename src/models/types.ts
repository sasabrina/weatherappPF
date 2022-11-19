export type CurrentWeather = {
  name: string;
  date: number;
  temp: number;
  feelsLike: number;
  min: number;
  max: number;
  humidity: number;
  main: string;
  description: string;
  icon: string;
};

export type Forecast = {
  date: number;
  temp: number;
  main: string;
  icon: string;
};

export type City = {
  id: string;
  name: string;
};

import { CurrentWeather, Forecast, RawForecast, RawWeather } from "@/models";

const BASE_URL: string = "http://api.openweathermap.org/data/2.5";
const createUrl = (query: string): string =>
  `${BASE_URL}${query}&appid=${import.meta.env.VITE_API_KEY}`;

export const fetchCurrentWeather = async (
  name: string
): Promise<CurrentWeather> => {
  const apiUrl: string = createUrl(`/weather?q=${name}`);

  const request = await fetch(apiUrl);
  const response: RawWeather = await request.json();

  return {
    name: response.name,
    date: response.dt,
    temp: response.main.temp,
    feelsLike: response.main.feels_like,
    min: response.main.temp_min,
    max: response.main.temp_max,
    humidity: response.main.humidity,
    main: response.weather[0].main,
    description: response.weather[0].description,
    icon: response.weather[0].icon,
  };
};

export const fetchForecast = async (name: string): Promise<Forecast[]> => {
  const apiUrl: string = createUrl(`/forecast?q=${name}`);

  const request = await fetch(apiUrl);
  const response: RawForecast = await request.json();
  const forecast = response.list.filter(
    (item: any, i: number) => i % 8 === 0 && item
  );

  return forecast.map(
    (item: any): Forecast => ({
      date: item.dt,
      temp: item.main.temp,
      main: item.weather[0].main,
      icon: item.weather[0].icon,
    })
  );
};

import { CurrentWeather, Forecast } from "@/models";

export const fetchCurrentWeather = async (
  name: string
): Promise<CurrentWeather> => {
  const apiUrl: string = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${
    import.meta.env.VITE_API_KEY
  }`;

  const request = await fetch(apiUrl);
  const response = await request.json();

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
  const apiUrl: string = `http://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${
    import.meta.env.VITE_API_KEY
  }`;

  const request = await fetch(apiUrl);
  const response = await request.json();
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

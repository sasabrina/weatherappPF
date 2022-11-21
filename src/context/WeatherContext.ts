import { createContext } from "react";
import { FetchWeatherOptions, WeatherState } from "@/models";

type WeatherContextProps = {
  weatherState: WeatherState;
  loading: boolean;
  getWeather: (options: FetchWeatherOptions) => void;
};

export const WeatherContext = createContext<WeatherContextProps>(
  {} as WeatherContextProps
);

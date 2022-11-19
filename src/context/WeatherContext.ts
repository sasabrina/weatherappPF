import { createContext } from "react";
import { City, WeatherState } from "@/models";

type WeatherContextProps = {
  weatherState: WeatherState;
  loading: boolean;
  getWeather: (name: City["name"]) => void;
};

export const WeatherContext = createContext<WeatherContextProps>(
  {} as WeatherContextProps
);

import { useState } from "react";
import { fetchCurrentWeather, fetchForecast } from "@/api/apiWeather";
import { City, WeatherState } from "@/models";
import { WeatherContext } from "./WeatherContext";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const WeatherProvider = ({ children }: props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherState, setWeatherState] = useState<WeatherState>(
    {} as WeatherState
  );

  const getWeather = async (name: City["name"]) => {
    setLoading(true);
    try {
      const [weather, forecast] = await Promise.all([
        fetchCurrentWeather(name),
        fetchForecast(name),
      ]);

      setWeatherState({ ...weather, forecast: [...forecast] });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherState, loading, getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

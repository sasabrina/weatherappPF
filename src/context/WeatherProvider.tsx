import { useEffect, useState } from "react";
import { fetchCurrentWeather, fetchForecast } from "@/api/apiWeather";
import { FetchWeatherOptions, WeatherState } from "@/models";
import { WeatherContext } from "./WeatherContext";
import useGeoLocation from "@/hooks/useGeolocation";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const WeatherProvider = ({ children }: props) => {
  const location = useGeoLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherState, setWeatherState] = useState<WeatherState>(
    {} as WeatherState
  );

  const getWeather = async (options: FetchWeatherOptions) => {
    setLoading(true);
    try {
      const [weather, forecast] = await Promise.all([
        fetchCurrentWeather({ ...options }),
        fetchForecast({ ...options }),
      ]);

      setWeatherState({ ...weather, forecast: [...forecast] });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (location.enabled) {
      getWeather({
        name: null,
        lat: location.lat,
        lon: location.lon,
      });
    } else
      getWeather({
        name: "buenos aires",
        lat: null,
        lon: null,
      });
  }, [location]);

  return (
    <WeatherContext.Provider value={{ weatherState, loading, getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

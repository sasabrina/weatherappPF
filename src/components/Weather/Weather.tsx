import { useContext } from "react";
import { CurrentWeather, Forecast, Loading } from "@/components";
import { WeatherContext } from "@/context";
import styles from "./weather.module.scss";

export interface WeatherProps {}

const Weather: React.FC<WeatherProps> = () => {
  const { weatherState, loading } = useContext(WeatherContext);

  return (
    <section className={styles.weatherContainer}>
      {loading && <Loading active={loading} />}
      {weatherState.forecast && (
        <>
          <CurrentWeather weather={weatherState} />
          <Forecast items={weatherState.forecast} />
        </>
      )}
    </section>
  );
};

export default Weather;

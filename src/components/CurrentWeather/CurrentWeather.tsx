import { CurrentWeather as Weather } from "@/models";
import { capitalize, formatTemperature } from "@/helpers";
import { Date, WeatherIcon } from "@/components";
import styles from "./currentWeather.module.scss";

export interface CurrentWeatherProps {
  weather: Weather;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  weather,
}: CurrentWeatherProps) => {
  const { name, date, temp, icon, description, min, max, feelsLike, humidity } =
    weather;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>

      <Date date={date} format="dddd h:mm A" />

      <h3 className={styles.temperature}>{formatTemperature(temp)}</h3>

      <WeatherIcon icon={icon} />

      <h3 className={styles.description}>{capitalize(description, " ")}</h3>

      <p className={styles.details}>
        <span>Min: {formatTemperature(min)}</span>
        <span>Max: {formatTemperature(max)}</span>
      </p>

      <p className={styles.details}>
        <span>Feels like: {formatTemperature(feelsLike)}</span>
        <span>Humidity: {humidity}%</span>
      </p>
    </div>
  );
};

export default CurrentWeather;

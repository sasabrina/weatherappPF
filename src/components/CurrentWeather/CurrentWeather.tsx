import moment from "moment";
import { CurrentWeather as Weather } from "@/models";
import styles from "./currentWeather.module.scss";
import { capitalize, handleIcons, kelvinToCelcius } from "@/helpers";

export interface CurrentWeatherProps {
  weather: Weather;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  weather,
}: CurrentWeatherProps) => {
  const { name, date, temp, icon, description, min, max, feelsLike, humidity } =
    weather;
  const formatedDate = moment(date).format("dddd h:mm A");
  const formatedTemp = (temp: number): string => `${kelvinToCelcius(temp)} °C`;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>

      <p>{formatedDate}</p>

      <h3 className={styles.temperature}>{formatedTemp(temp)}</h3>

      <figure className={styles.iconContainer}>
        <img src={`./images/${handleIcons(icon)}.svg`} alt="weather icon" />
      </figure>

      <h3 className={styles.description}>{capitalize(description, " ")}</h3>

      <p className={styles.details}>
        <span>Min: {formatedTemp(min)}</span>
        <span>Max: {formatedTemp(max)}</span>
      </p>

      <p className={styles.details}>
        <span>Sen. Térmica: {formatedTemp(feelsLike)}</span>
        <span>Humedad: {humidity}%</span>
      </p>
    </div>
  );
};

export default CurrentWeather;

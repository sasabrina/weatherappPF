import { Forecast } from "@/models";
import { Date, WeatherIcon } from "@/components";
import { formatTemperature } from "@/helpers";
import styles from "./forecastItem.module.scss";

export interface ForecastItemProps {
  forecast: Forecast;
}

const ForecastItem: React.FC<ForecastItemProps> = ({
  forecast,
}: ForecastItemProps) => {
  const { date, icon, temp, main } = forecast;

  return (
    <li className={styles.container}>
      <Date date={date} format="dddd" />

      <WeatherIcon icon={icon} />

      <h3>{formatTemperature(temp)}</h3>

      <p>{main}</p>
    </li>
  );
};

export default ForecastItem;

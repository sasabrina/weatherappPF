import { Forecast as Weather } from "@/models";
import { ForecastItem } from "@/components";
import styles from "./forecast.module.scss";

export interface ForecastProps {
  items: Weather[];
}

const Forecast: React.FC<ForecastProps> = ({ items }: ForecastProps) => {
  return (
    <ul className={styles.container}>
      {items.map((forecast, i) => (
        <ForecastItem key={i} forecast={forecast} />
      ))}
    </ul>
  );
};

export default Forecast;

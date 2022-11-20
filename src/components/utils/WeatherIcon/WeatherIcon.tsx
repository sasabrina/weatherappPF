import { handleIcons } from "@/helpers";
import styles from "./weatherIcon.module.scss";

export interface WeatherIconProps {
  icon: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({
  icon,
}: WeatherIconProps) => {
  return (
    <figure className={styles.iconContainer}>
      <img src={`./images/${handleIcons(icon)}.svg`} alt="weather icon" />
    </figure>
  );
};

export default WeatherIcon;

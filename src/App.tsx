import { ChangeEvent, useContext, useEffect, useState } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import { CITIES } from "@/data";
import { City } from "@/models";
import { Select, Option, Weather } from "@/components";
import styles from "./App.module.scss";

function App() {
  const [city, setCity] = useState<City["name"]>("");
  const { getWeather } = useContext(WeatherContext);

  const handleSelectchange = (e: ChangeEvent<HTMLSelectElement>): void =>
    setCity(e.target.value);

  useEffect(() => {
    const options = {
      name: city,
      lat: null,
      lon: null,
    };

    if (city) getWeather(options);
  }, [city]);

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Weather app</h1>
      </header>

      <main className={styles.main}>
        <Select
          name="cities"
          value={city}
          onchange={handleSelectchange}
          optionPlaceholder="Select a city..."
        >
          {CITIES.map((city) => (
            <Option key={city.id} value={city.id} name={city.name} />
          ))}
        </Select>

        <Weather />
      </main>
    </>
  );
}

export default App;

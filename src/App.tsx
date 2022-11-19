import { ChangeEvent, useContext, useEffect, useState } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import { CITIES } from "@/data";
import { City } from "@/models";
import { Select, Option, CurrentWeather } from "@/components";
import styles from "./App.module.scss";

function App() {
  const [city, setCity] = useState<City["name"]>("");
  const { weatherState, loading, getWeather } = useContext(WeatherContext);

  const handleSelectchange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCity(e.target.value);
  };

  useEffect(() => {
    if (city) getWeather(city);
    else getWeather("buenos aires");
  }, [city]);

  if (loading) {
    return <div>Cargando...</div>;
  }

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
          optionPlaceholder="Seleccione una ciudad..."
        >
          {CITIES.map((city) => (
            <Option key={city.id} value={city.id} name={city.name} />
          ))}
        </Select>

        <CurrentWeather weather={weatherState} />
      </main>
    </>
  );
}

export default App;

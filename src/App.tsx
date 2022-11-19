import { ChangeEvent, useEffect, useState } from "react";
import { fetchCurrentWeather, fetchForecast } from "./api/apiWeather";
import "./App.css";
import { CITIES } from "./data";
import { City } from "./models";

function App() {
  const [city, setCity] = useState<City["name"]>("");
  const [weather, setWeather] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectchange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCity(e.target.value);
  };

  const getWeather = async (name: string) => {
    setLoading(true);
    try {
      const [weather, forecast] = await Promise.all([
        fetchCurrentWeather(name),
        fetchForecast(name),
      ]);

      setWeather({ ...weather, forecast: [...forecast] });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (city) getWeather(city);
    else getWeather("buenos aires");
  }, [city]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="App">
      <h1>{weather.name}</h1>

      <select
        name="cities"
        id="cities"
        value={city}
        onChange={handleSelectchange}
      >
        <option disabled value="">
          Seleccione una ciudad
        </option>
        {CITIES.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;

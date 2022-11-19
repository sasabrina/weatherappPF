import { ChangeEvent, useContext, useEffect, useState } from "react";
import { WeatherContext } from "@/context/WeatherContext";
import { CITIES } from "@/data";
import { City } from "@/models";
import "./App.css";

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
    <div className="App">
      <h1>{weatherState.name}</h1>

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

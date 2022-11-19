import { useEffect, useState } from "react";
import { fetchCurrentWeather, fetchForecast } from "./api/apiWeather";
import "./App.css";

function App() {
  const [location, setLocation] = useState<string>("caballito");
  const [weather, setWeather] = useState<any>({});

  const getWeather = async (name: string) => {
    try {
      const [weather, forecast] = await Promise.all([
        fetchCurrentWeather(name),
        fetchForecast(name),
      ]);

      console.log({ ...weather, forecast: [...forecast] });
      setWeather({ ...weather, forecast: [...forecast] });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div className="App">
      <h1>{weather.name}</h1>
    </div>
  );
}

export default App;

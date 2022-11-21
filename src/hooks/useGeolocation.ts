import { Location } from "@/models";
import { useState, useEffect } from "react";

const useGeoLocation = (): Location => {
  const [location, setLocation] = useState<Location>({
    enabled: false,
    lat: 0,
    lon: 0,
  });

  const onSuccess = (location: any) => {
    setLocation({
      enabled: true,
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    });
  };

  const onError = (error: any) => {
    console.log(error.message);

    setLocation({
      enabled: false,
      lat: 0,
      lon: 0,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeoLocation;

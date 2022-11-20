// converts temperature from kelvin to celcius
export const kelvinToCelcius = (val: number): number =>
  Math.round(val - 273.15);

// returns an existing file name for the missing icons
export const handleIcons = (icon: string): string => {
  switch (icon) {
    case "03n":
      return "03d";
    case "04n":
      return "04d";
    case "09d":
    case "09n":
    case "10n":
      return "10d";
    case "11n":
      return "11d";
    case "13n":
      return "13d";
    case "50n":
      return "50d";
    default:
      return icon;
  }
};

// capitalizes the first letter of one or more words
export const capitalize = (input: string, separator: string): string => {
  const capitalizeWord = (word: string) =>
    `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;

  return input.length > 0
    ? input
        .split(separator)
        .map((word) => `${capitalizeWord(word)}`)
        .join(" ")
    : `${capitalizeWord(input)}`;
};

// returns formated temperature to render
export const formatTemperature = (temp: number): string =>
  `${kelvinToCelcius(temp)} °C`;

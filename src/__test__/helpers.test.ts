import { expect, test, describe, it } from "vitest";
import { kelvinToCelcius, capitalize, formatTemperature } from "@/helpers";

const kelvinTemp = 288.24;

describe("kelvinToCelcius", () => {
  test("should convert temperature from kelvin to celcius", (): void => {
    expect(kelvinToCelcius(kelvinTemp)).toBe(15);
  });
});

describe("formatTemperature", () => {
  test("should convert temperature to string", (): void => {
    expect(formatTemperature(kelvinTemp)).toBe("15 °C");
  });
});

describe("capitalize", () => {
  it("should capitalize first letter of string", (): void => {
    expect(capitalize("caballito", " ")).toBe("Caballito");
  });

  it("should capitalize first letter of multiple strings", (): void => {
    expect(capitalize("buenos aires", " ")).toBe("Buenos Aires");
    expect(capitalize("buenos_aires", "_")).toBe("Buenos Aires");
  });
});

import { useState, KeyboardEvent } from "react";
import { CityWeather } from "../components/city-weather";

export default function IndexPage() {
  const [cityInput, setCityInput] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);

  const handleUpdate = (event: KeyboardEvent<HTMLInputElement>) => {
    setCityInput(event.currentTarget.value)

    if (event.key === 'Enter') {
      setCity(cityInput)
    }
  }

  const handleSubmit = () => {
    setCity(cityInput)
  }

  return (
    <div className="py-2">
      <span>Weather Search:</span>{" "}
      <input
        data-testid="weather-input"
        className="ml-2 border px-2 py-1 border-black"
        type="text"
        name="city"
        onKeyUp={handleUpdate}
      />
      <button
        className="ml-2 text-sm border rounded-lg p-2"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {city && (
        <div className="mt-4">
          <CityWeather city={city} />
        </div>
      )}
    </div>
  );
}

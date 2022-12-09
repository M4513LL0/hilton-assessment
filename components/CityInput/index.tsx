import { useState, KeyboardEvent } from 'react'

interface CityInputProps {
  setCity(city: string): void
}

export default function CityInput(props: CityInputProps) {
  const { setCity } = props
  const [cityInput, setCityInput] = useState<string>('')

  const submitCity = (): void => {
    setCity(cityInput)
    setCityInput('')
  }

  const handleUpdate = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      submitCity()
    }
    else {
      setCityInput(event.currentTarget.value)
    }
  }

  const handleSubmit = () => {
    submitCity()
  }

  return (
    <div>
      <span>Weather Search:</span>{' '}
      <input
        data-testid="weather-input"
        className="ml-2 border px-2 py-1 border-black"
        type="text"
        name="city"
        onChange={handleUpdate}
        onKeyUp={handleUpdate}
        value={cityInput}
      />
      <button
        className="ml-2 text-sm border rounded-lg p-2"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  )
}

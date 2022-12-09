// react imports
import { useState, KeyboardEvent } from 'react'

// style imports
import styles from './styles'

// interfaces
interface CityInputProps {
  setCity: (city: string) => void
}

// CityInput component
export default function CityInput({ setCity }: CityInputProps) {
  const [cityInput, setCityInput] = useState<string>('')

  const submitCity = (): void => {
    setCity(cityInput)
    setCityInput('')
  }

  const handleUpdate = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      submitCity()
    } else {
      setCityInput(event.currentTarget.value)
    }
  }

  const handleSubmit = (): void => {
    submitCity()
  }

  return (
    <div>
      <label
        htmlFor="weather-input"
        className={styles.label}
      >
        Weather Search:
      </label>
      <input
        id="weather-input"
        data-testid="weather-input"
        className={styles.input}
        type="text"
        name="city"
        onChange={handleUpdate}
        onKeyUp={handleUpdate}
        value={cityInput}
      />
      <button
        className={styles.button}
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  )
}

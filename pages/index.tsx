import { useState, KeyboardEvent } from 'react'

// component imports
import CityInput from 'components/CityInput/'
import CityWeather from 'components/CityWeather/'

export default function IndexPage() {
  const [city, setCity] = useState<string>('')

  return (
    <div className="py-2">
      <CityInput {...{ setCity }} />

      {city ? (
        <div className="mt-4">
          <CityWeather {...{city }} />
        </div>
      ) : (
        <div>Enter a city!</div>
      )}
    </div>
  )
}

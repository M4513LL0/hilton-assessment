// react imports
import { useState, KeyboardEvent } from 'react'

// component imports
import CityInput from 'components/CityInput/'
import CityWeather from 'components/CityWeather/'

// style imports
import styles from './styles'

// IndexPage component
export default function IndexPage() {
  const [city, setCity] = useState<string>('')

  return (
    <div className={styles.appContainer}>
      <CityInput {...{ setCity }} />

      <div className={styles.weatherContainer}>
        {city ? (
          <CityWeather {...{city }} />
        ) : (
          <div>Enter a city!</div>
        )}
      </div>
    </div>
  )
}

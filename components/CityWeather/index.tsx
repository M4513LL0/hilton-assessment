// react imports
import useGetWeatherData from 'hooks/useGetWeatherData'

// component imports
import WeatherIcon from 'components/WeatherIcon'

// style imports
import styles from './styles'

// interfaces
interface CityWeatherProps {
  city: string
}

// CityWeather component
export default function CityWeather(props: CityWeatherProps) {
  const { city } = props
  const { temp, desc, icon, cityUnknown, isLoading, isError } =
    useGetWeatherData<string>(city)

  return (
    <div className={styles.container} aria-live="polite" aria-busy={isLoading ? 'true' : 'false'}>
      {isError && (
        <div>Sorry, there was an error!</div>
      )}

      {isLoading && (
        <div>Loading ...</div>
      )}

      {cityUnknown && (
        <div>Unknown City</div>
      )}

      {!isLoading && !isError && !cityUnknown && (
        <>
          <h1 className={styles.h1}>{city}</h1>
          <WeatherIcon {...{ icon, desc }} />
          <div className={styles.desc}>{desc}</div>
          <div className={styles.tempContainer}>
            <div className={styles.tempLabel}>Temperature:</div>
            <div className={styles.temp}>{temp}</div>
          </div>
        </>
      )}
    </div>
  )
}

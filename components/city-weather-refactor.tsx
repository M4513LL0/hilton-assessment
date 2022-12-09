import { useState, useEffect } from 'react'
import useGetApiKey from '../hooks/useGetApiKey'
import kelvinToFahrenheit from '../utils/kelvinToFahrenheit'

interface CityWeatherProps {
  city: string
}

export default function CityWeather(props: CityWeatherProps) {
  const { city } = props
  const apiKey = useGetApiKey()
  const [weatherTemp, setWeatherTemp] = useState<string>('')
  const [weatherDesc, setWeatherDesc] = useState<string>('')
  const [cityKnown, setCityKnown] = useState<boolean>(true)

  useEffect(() => {
    fetchWeatherDetails()
  }, [city])

  const fetchWeatherDetails = async (): void => {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )

    const response = await request.json()

    if (response.cod === 200) {
      setWeatherTemp(kelvinToFahrenheit(response?.main?.temp))
      setWeatherDesc(response?.weather?.[0]?.description)
      setCityKnown(true)
    }

    if (response.cod === '404') {
      setCityKnown(false)
    }
  }

  return (
    <div>
      <h1>{city}</h1>

      {cityKnown ? (
        <>
          <div>Temperature: {weatherTemp}</div>
          <div>Description: {weatherDesc}</div>
        </>
      ) : (
        <div>Unknown City</div>
      )}
    </div>
  )
}

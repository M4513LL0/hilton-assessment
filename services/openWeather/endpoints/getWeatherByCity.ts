import useGetApiKey from 'hooks/useGetApiKey'
import openWeatherAPI from 'services/openWeather/api'

export default function getWeatherByCity(city: string): string {
  const apiKey = useGetApiKey()
  return `${openWeatherAPI}weather?q=${city}&appid=${apiKey}`
}

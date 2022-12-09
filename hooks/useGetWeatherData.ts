import useSWR from 'swr'
import fetcher from 'services/fetcher'
import getWeatherByCity from 'services/openWeather/endpoints/getWeatherByCity'
import kelvinToFahrenheit from 'utils/kelvinToFahrenheit'

export default function useGetWeatherData(city) {
  const { data, error } = useSWR(
    getWeatherByCity(city),
    fetcher
  )

  return {
    temp: kelvinToFahrenheit(data?.main?.temp),
    desc: data?.weather?.[0]?.description,
    icon: data?.weather?.[0]?.icon,
    cityUnknown: data?.cod === '404' ? true : false,
    isLoading: !error && !data,
    isError: error
  }
}

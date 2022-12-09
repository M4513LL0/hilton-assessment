import useSWR from 'swr'
import fetcher from 'services/fetcher'
import getWeatherByCity from 'services/openWeather/endpoints/getWeatherByCity'
import kelvinToFahrenheit from 'utils/kelvinToFahrenheit'

export default function useGetWeatherData(city) {
  console.log(getWeatherByCity(city))
  const { data, error } = useSWR(
    getWeatherByCity(city),
    fetcher
  )

  return {
    weatherTemp: kelvinToFahrenheit(data?.main?.temp),
    weatherDesc: data?.weather?.[0]?.description,
    cityUnknown: data?.cod === '404' ? true : false,
    isLoading: !error && !data,
    isError: error
  }
}

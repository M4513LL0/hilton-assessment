import useGetWeatherData from 'hooks/useGetWeatherData'

interface CityWeatherProps {
  city: string
}

export default function CityWeather(props: CityWeatherProps) {
  const { city } = props
  const { weatherTemp, weatherDesc, cityUnknown, isLoading, isError } =
    useGetWeatherData<string>(city)

  if (isLoading) return <div>Loading ...</div>
  if (isError) return <div>There was an error ...</div>
  if (cityUnknown) return <div>Unknown City ...</div>

  return (
    <div>
      <h1>{city}</h1>
      <div>Temperature: {weatherTemp}</div>
      <div>Description: {weatherDesc}</div>
    </div>
  )
}

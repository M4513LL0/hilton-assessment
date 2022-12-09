interface WeatherIconProps {
  icon: string,
  desc: string
}

export default function WeatherIcon(props: WeatherIconProps) {
  const { icon, desc } = props
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`

  return <img src={iconURL} width="100px" height="100px" alt={`An icon depicting ${desc}.`} />
}

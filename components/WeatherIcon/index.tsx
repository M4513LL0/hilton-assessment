interface WeatherIconProps {
  icon: string
  desc: string
}

export default function WeatherIcon({ icon, desc }: WeatherIconProps) {
  return (
    <img
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      width="100px"
      height="100px"
      alt={`An icon depicting ${desc}.`}
    />
  )
}

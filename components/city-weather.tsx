// eslint-disable @typescript-eslint/no-use-before-define
import { Component } from "react";

// to get api key: https://openweathermap.org/appid
const API_KEY = "0f99a555086493083b07bcb92e3a0ad4";

interface CityWeatherProps {
  city: string;
}

interface CityWeatherState {
  weatherTemp: string,
  weatherDesc: string,
}

export class CityWeather extends Component<CityWeatherProps, CityWeatherState> {
  public constructor(props: CityWeatherProps) {
    super(props);
    this.state = {
      weatherTemp: 'Loading',
      weatherDesc: 'Loading'
    };
  }

  public fetchWeatherDetails() {
    const { city } = this.props;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((r) => r.json())
      .then((result) => {
          this.setState({
          weatherTemp: KtoF(result?.main?.temp),
          weatherDesc: result?.weather?.[0]?.description
        })
      });
  }

  public componentDidMount() {
    this.fetchWeatherDetails();
  }

  public componentDidUpdate(prevProps: CityWeatherProps) {
    if (this.props.city !== prevProps.city) {
      this.setState({
        weatherTemp: 'Loading',
        weatherDesc: 'Loading'
      });

      this.fetchWeatherDetails();
    }
  }

  public render() {
    const { city } = this.props;
    const { weatherTemp, weatherDesc } = this.state

    return (
      <div>
        <h1>{city}</h1>
        <div>
          Temperature: {weatherTemp}
        </div>
        <div>Descripiton: {weatherDesc}</div>
      </div>
    );
  }
}

function KtoF(tempKevlin: number) : string {
  return (((tempKevlin - 273.15) * 9) / 5 + 32).toFixed(0) + String.fromCharCode(8457);
}

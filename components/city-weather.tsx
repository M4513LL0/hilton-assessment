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
  cityValid: boolean
}

export class CityWeather extends Component<CityWeatherProps, CityWeatherState> {
  public constructor(props: CityWeatherProps) {
    super(props);
    this.state = {
      weatherTemp: 'Loading',
      weatherDesc: 'Loading',
      cityValid: true
    };
  }

  public fetchWeatherDetails() {
    const { city } = this.props;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((r) => r.json())
      .then((result) => {
        if (result.cod === 200) {
          this.setState({
            weatherTemp: KtoF(result?.main?.temp),
            weatherDesc: result?.weather?.[0]?.description,
            cityValid: true
          });
        }

        if (result.cod === '404') {
          this.setState({
            ... this.state,
            cityValid: false
          });
        }
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
    const { weatherTemp, weatherDesc, cityValid } = this.state

    return (
      <div>
        <h1>{city}</h1>
        {cityValid ? (
          <>
            <div>
              Temperature: {weatherTemp}
            </div>
            <div>Descripiton: {weatherDesc}</div>
          </>
        ) : (
          <div>Unknown City</div>
        )}
      </div>
    );
  }
}

function KtoF(tempKevlin: number) : string {
  return (((tempKevlin - 273.15) * 9) / 5 + 32).toFixed(0) + String.fromCharCode(8457);
}

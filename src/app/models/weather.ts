/**
 * Interface representing weather data with city information.
 */
export interface WeatherCurrent {
  name: string
  main: CurrentData
  weather: Weather[]
}

/**
 * Interface representing current weather details.
 */
interface CurrentData {
  temp: number
  temp_max: number
  temp_min: number
}

/**
 * Interface representing weather description details.
 */
interface Weather {
  description: string
}

/**
 * Interface representing weather forecast data.
 */
export interface WeatherForecast {
  dt: number
  dt_txt: string
  temp: number
  temp_min: number
  temp_max: number
  description: string
  icon: string
  clouds: number
}

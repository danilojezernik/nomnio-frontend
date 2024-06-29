/**
 * Interface representing the current weather data structure
 */
export interface WeatherCurrent {
  name: string; // Name of the location
  main: WeatherMain; // Main weather details (temperature, etc.)
  weather: WeatherData[]; // Array of weather data (conditions, descriptions, etc.)
}

/**
 * Interface representing the weather forecast data structure
 */
export interface WeatherForecast {
  list: Weather[]; // List of weather data entries
}

/**
 * Interface representing a single weather data entry
 */
export interface Weather {
  dt: number; // Date and time of the weather data in Unix timestamp format
  main: WeatherMain; // Main weather details (temperature, etc.)
  weather: WeatherData[]; // Array of weather data (conditions, descriptions, etc.)
}

/**
 * Interface representing the details of weather conditions
 */
interface WeatherData {
  main: string; // Main weather condition (e.g., Rain, Snow, Clear)
  description: string; // Detailed description of the weather condition
  icon: string; // Icon identifier for the weather condition
}

/**
 * Interface representing the main weather details
 */
interface WeatherMain {
  temp: number; // Current temperature
  temp_max: number; // Maximum temperature
  temp_min: number; // Minimum temperature
}

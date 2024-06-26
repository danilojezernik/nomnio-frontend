/**
 * Interface representing weather data with city information.
 */
export interface Weather {
  city: City; // Property representing the city information
}

/**
 * Interface representing city details.
 */
interface City {
  name: string; // Property representing the city name
}

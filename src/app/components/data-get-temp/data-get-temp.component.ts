import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from "../../services/api/weather.service";
import { map, Observable } from "rxjs";
import { WeatherCurrent } from "../../models/weather";

/**
 * Component responsible for displaying current weather information.
 */
@Component({
  selector: 'app-data-get-temp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-get-temp.component.html'
})
export class DataGetTempComponent {

  public weatherService = inject(WeatherService)

  // Observable holding weather data
  weatherData$: Observable<WeatherCurrent[]> = this.weatherService.getWeather().pipe(
    map(data => {
      // Transform data to an array containing the first element and that is weather
      return [data[0]]
    })
  )

}

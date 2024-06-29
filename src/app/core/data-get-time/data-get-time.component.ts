import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from "../../services/api/weather.service";
import { Observable, tap } from "rxjs";
import { WeatherCurrent } from "../../models/weather";
import { TranslateModule } from "@ngx-translate/core";

/**
 * Component displaying city name and the date and time of the last update.
 */
@Component({
  selector: 'app-data-get-time',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './data-get-time.component.html'
})
export class DataGetTimeComponent {

  public weatherService = inject(WeatherService)

  // Observable holding weather data
  weatherDataCity$: Observable<WeatherCurrent[]> = this.weatherService.getWeatherCurrent().pipe(
    tap(data => {
      console.log(data)
    })
  )

}

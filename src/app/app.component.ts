import { Component, inject, OnInit } from '@angular/core';
import { WeatherService } from "./services/api/weather.service";
import { combineLatest, map, Observable } from "rxjs";
import { WeatherCurrent, WeatherForecast } from "./models/weather";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  private _weatherService = inject(WeatherService)
  spinner: boolean = true

  // Observable for current weather data
  weatherCurrent: Observable<WeatherCurrent[]> = this._weatherService.getWeatherCurrent()

  // Observable for weather forecast data
  weatherForecast: Observable<WeatherForecast[]> = this._weatherService.getWeatherForecast()

  // Combined weather data observable
  weatherData!: Observable<any>


  ngOnInit() {

    // Combine latest values from both weatherCurrent and weatherForecast observables
    this.weatherData = combineLatest([ this.weatherCurrent, this.weatherForecast ]).pipe(
      // Transform the combined data
      map(([ current, forecast ]) => {
        // If either current or forecast data is empty, set spinner to false
        if (current.length === 0 || forecast.length === 0) {
          this.spinner = false
        }
        // Return combined data as an object
        return { current, forecast }
      })
    )

    // Subscribe to the combined weather data observable to handle data and update spinner state
    this.weatherData.subscribe(({ current, forecast }) => {
      // Set spinner to false if either current or forecast data is present
      this.spinner = !(current.length > 0 || forecast.length > 0);
    });
  }
}

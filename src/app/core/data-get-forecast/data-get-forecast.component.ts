import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from "../../services/api/weather.service";
import { Observable } from "rxjs";
import { Weather } from "../../models/weather";

@Component({
  selector: 'app-data-get-forecast',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './data-get-forecast.component.html'
})
export class DataGetForecastComponent{

  private _weatherService = inject(WeatherService)

  // Observable for weather forecast data fetched from WeatherService
  weatherForecastData$: Observable<Weather[]> = this._weatherService.getWeatherForecast();


}

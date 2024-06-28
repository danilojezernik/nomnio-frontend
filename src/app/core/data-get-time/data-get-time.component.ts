import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from "../../services/api/weather.service";
import { Observable } from "rxjs";
import { WeatherCurrent } from "../../models/weather";
import { SunSvgComponent } from "../../shared/components/weather-svg/sun-svg/sun-svg.component";
import { FewCloudsSvgComponent } from "../../shared/components/weather-svg/few-clouds-svg/few-clouds-svg.component";
import {
  ThunderstormSvgComponent
} from "../../shared/components/weather-svg/thunderstorm-svg/thunderstorm-svg.component";
import { RainSvgComponent } from "../../shared/components/weather-svg/rain-svg/rain-svg.component";
import {
  ScatteredCloudsSvgComponent
} from "../../shared/components/weather-svg/scattered-clouds-svg/scattered-clouds-svg.component";
import { SnowSvgComponent } from "../../shared/components/weather-svg/snow-svg/snow-svg.component";
import {
  BrokenCloudsSvgComponent
} from "../../shared/components/weather-svg/broken-clouds-svg/broken-clouds-svg.component";

/**
 * Component displaying city name and the date and time of the last update.
 */
@Component({
  selector: 'app-data-get-time',
  standalone: true,
  imports: [ CommonModule, SunSvgComponent, FewCloudsSvgComponent, ThunderstormSvgComponent, RainSvgComponent, ScatteredCloudsSvgComponent, SnowSvgComponent, BrokenCloudsSvgComponent ],
  templateUrl: './data-get-time.component.html'
})
export class DataGetTimeComponent {

  public weatherService = inject(WeatherService)

  // Observable holding weather data
  weatherDataCity$: Observable<WeatherCurrent[]> = this.weatherService.getWeatherCurrent()

}

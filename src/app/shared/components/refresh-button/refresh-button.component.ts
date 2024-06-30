import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from "../../../services/api/weather.service";
import { TranslateModule } from "@ngx-translate/core";

/**
 * Component responsible for refreshing weather data on user interaction.
 */
@Component({
  selector: 'app-refresh-button',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './refresh-button.component.html'
})
export class RefreshButtonComponent {

  private _weatherService = inject(WeatherService)

  /**
   * Method triggered on button click to refresh current weather and forecast data.
   */
  refreshData() {
    this._weatherService.getWeatherCurrent().subscribe(); // Calls WeatherService to fetch current weather data.
    this._weatherService.getWeatherForecast().subscribe(); // Calls WeatherService to fetch weather forecast data.
  }

}

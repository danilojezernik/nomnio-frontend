import { Component, inject, OnInit } from '@angular/core';
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
export class RefreshButtonComponent implements OnInit {

  private _weatherService = inject(WeatherService)

  // Flag to track data availability
  public isDataAvailable: boolean = false;

  ngOnInit() {
    // Check if data is available on component initialization
    this.checkDataAvailability();
  }

  /**
   * Method triggered on button click to refresh current weather and forecast data.
   */
  refreshData() {
    // Fetch current weather data and update the data availability flag
    this._weatherService.getWeatherCurrent().subscribe(data => {
      this.isDataAvailable = !!data;
    });

    // Fetch weather forecast data and update the data availability flag
    this._weatherService.getWeatherForecast().subscribe(data => {
      this.isDataAvailable = !!data;
    });
  }

  /**
   * Method to check data availability initially
   */
  private checkDataAvailability() {
    // Check current weather data and update the data availability flag
    this._weatherService.getWeatherCurrent().subscribe(data => {
      this.isDataAvailable = !!data;
    });

    // Check weather forecast data and update the data availability flag
    this._weatherService.getWeatherForecast().subscribe(data => {
      this.isDataAvailable = !!data;
    });
  }

}

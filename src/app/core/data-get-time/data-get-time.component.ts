import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from "../../services/api/weather.service";
import { catchError, Observable, of, tap } from "rxjs";
import { WeatherCurrent } from "../../models/weather";
import { TranslateModule } from "@ngx-translate/core";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import { LOCAL_STORAGE_KEYS } from "../../shared/global-variables/global-variables";
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";

/**
 * Component displaying city name and the date and time of the last update.
 */
@Component({
  selector: 'app-data-get-time',
  standalone: true,
  imports: [ CommonModule, TranslateModule, SpinnerComponent ],
  templateUrl: './data-get-time.component.html'
})
export class DataGetTimeComponent implements OnInit {

  public weatherService = inject(WeatherService); // Injecting WeatherService to fetch weather data
  private _localStorageService = inject(LocalStorageService); // Injecting LocalStorageService to manage local storage

  // Component properties
  spinner: boolean = false; // Flag to show/hide the spinner
  weatherDataCity$!: Observable<WeatherCurrent | null>; // Observable to hold weather current data
  errorMessage = ''; // Error message to display in case of API call failure

  ngOnInit() {
    this.getCurrentData(); // Call method to fetch data on component initialization
  }

  /**
   * Fetches current weather data asynchronously using WeatherService.
   * Utilizes tap operator for side effects and catchError for error handling.
   */
  getCurrentData() {
    this.spinner = true; // Show spinner during data fetch

    this.weatherDataCity$ = this.weatherService.getWeatherCurrent().pipe(
      tap((data) => {
        this.spinner = false; // Hide spinner when data is successfully fetched
        return this._localStorageService.saveDataToLocalStorage(LOCAL_STORAGE_KEYS.WEATHER_DATA_CURRENT, data); // Save data to local storage
      }),
      catchError(error => {
        this.spinner = false; // Hide spinner on error
        this.errorMessage = error.message; // Assign error message for display
        return of(null); // Return null in case of error
      })
    );
  }

}

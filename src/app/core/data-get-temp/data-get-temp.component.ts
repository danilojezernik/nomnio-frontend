import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from "../../services/api/weather.service";
import { catchError, Observable, of, tap } from "rxjs";
import { WeatherCurrent } from "../../models/weather";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import { TranslateModule } from "@ngx-translate/core";
import { LOCAL_STORAGE_KEYS } from "../../shared/global-variables/global-variables";
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";

/**
 * Component responsible for displaying current weather information.
 */
@Component({
  selector: 'app-data-get-temp',
  standalone: true,
  imports: [ CommonModule, TranslateModule, SpinnerComponent ],
  templateUrl: './data-get-temp.component.html'
})
export class DataGetTempComponent implements OnInit {

  private _weatherService = inject(WeatherService);
  private _localStorageService = inject(LocalStorageService);

  // Component properties
  spinner = false; // Flag to show/hide the spinner
  weatherCurrentData$!: Observable<WeatherCurrent | null>; // Observable to hold weather current data
  errorMessage = ''; // Error message to display in case of API call failure

  ngOnInit() {
    this.getCurrentData();
  }

  /**
   * Fetches current weather data asynchronously using WeatherService.
   * Utilizes tap operator for side effects and catchError for error handling.
   */
  getCurrentData() {
    this.spinner = true; // Show spinner during data fetch

    this.weatherCurrentData$ = this._weatherService.getWeatherCurrent().pipe(
      tap(data => {
        this.spinner = false; // Hide spinner when data is successfully fetched
        this._localStorageService.saveDataToLocalStorage(LOCAL_STORAGE_KEYS.WEATHER_DATA_CURRENT, data); // Save data to local storage
      }),
      catchError(error => {
        this.spinner = false; // Hide spinner on error
        this.errorMessage = error.message; // Assign error message for display
        return of(null); // Return null in case of error
      })
    );
  }

}

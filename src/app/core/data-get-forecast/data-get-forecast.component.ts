import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from "../../services/api/weather.service";
import { catchError, Observable, of, tap } from "rxjs";
import { Weather } from "../../models/weather";
import { DateTransformPipe } from "../../pipes/date-transform.pipe";
import { TranslateModule } from "@ngx-translate/core";
import { SpinnerComponent } from "../../shared/components/spinner/spinner.component";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import { LOCAL_STORAGE_KEYS } from "../../shared/global-variables/global-variables";

@Component({
  selector: 'app-data-get-forecast',
  standalone: true,
  imports: [ CommonModule, DateTransformPipe, TranslateModule, SpinnerComponent ],
  templateUrl: './data-get-forecast.component.html'
})
export class DataGetForecastComponent implements OnInit {


  // Dependency injection of services using Angular's inject function
  private _weatherService = inject(WeatherService); // Injecting WeatherService to fetch weather data
  private _localStorageService = inject(LocalStorageService); // Injecting LocalStorageService to manage local storage

  // Component properties
  spinner: boolean = false; // Flag to show/hide the spinner
  weatherForecastData$!: Observable<Weather[]>; // Observable to hold weather forecast data
  errorMessage = ''; // Error message to display in case of API call failure

  // Lifecycle hook: OnInit interface method
  ngOnInit() {
    this.getForecastData(); // Call method to fetch data on component initialization
  }

  // Method to fetch weather forecast data
  getForecastData() {
    this.spinner = true; // Show spinner during data fetch

    /*
      Use WeatherService to fetch weather forecast data asynchronously:
      - tap operator: performs side effects when data is emitted, here updates spinner state and saves data to local storage
      - catchError operator: handles errors in case of API call failure, updates spinner and sets an empty array if error occurs
    */
    this.weatherForecastData$ = this._weatherService.getWeatherForecast().pipe(
      tap((data) => {
        this.spinner = false; // Hide spinner when data is successfully fetched
        return this._localStorageService.saveDataToLocalStorage(LOCAL_STORAGE_KEYS.WEATHER_DATA_FORECAST, data); // Save data to local storage
      }),
      catchError(error => {
        this.spinner = false; // Hide spinner on error
        this.errorMessage = error.message; // Assign error message for display
        return of([] as Weather[]); // Return an empty array in case of error
      })
    );
  }
}

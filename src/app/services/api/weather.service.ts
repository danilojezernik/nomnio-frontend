import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, of, tap } from "rxjs";
import { Weather, WeatherCurrent, WeatherForecast } from "../../models/weather";
import { environment } from "../../../environments/environment";
import { MomentService } from "../moment/moment.service";
import { LOCAL_STORAGE_KEYS } from "../../shared/global-variables/global-variables";
import { ErrorHandleService } from "../error-handle/error-handle.service";

/**
 * Service to get weather data from backend API
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  /**
   * Holds the formatted date and time retrieved from MomentService.
   * Initialized as undefined until populated.
   */
  public formattedDateTime: { date: string, time: string } | undefined;

  private _http = inject(HttpClient);
  private _momentService = inject(MomentService);
  private _errorHandleService = inject(ErrorHandleService);

  /**
   * Retrieves current weather data from the backend API or local storage
   * @returns Observable<WeatherCurrent> Observable emitting current weather data
   */
  getWeatherCurrent(): Observable<WeatherCurrent> {
    const dataInLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.WEATHER_DATA_CURRENT);

    if (dataInLocalStorage) {
      // If data exists in local storage, log and return it
      console.log('Data fetched from local storage');
      this.getCurrentDateAndTime();
      return of(JSON.parse(dataInLocalStorage));
    } else {
      // If data does not exist in local storage, fetch from the backend API
      return this._http.get<WeatherCurrent[]>(`${environment.urlLocalCurrent}`).pipe(
        map(data => data[0]),
        /**
         * Tap into the observable stream without modifying it,
         * then get current ISO date and format ISO date using Moment service
         */
        tap(_ => console.log('Data fetched from API')),
        tap(_ => {
          this.getCurrentDateAndTime();
        }),
        /**
         * Use catchError to handle any errors that occur during the HTTP request
         * @param error - the error response from the HTTP request
         * @returns Observable that throws a custom error message
         */
        catchError(this._errorHandleService.handleError)
      );
    }
  }

  /**
   * Gets the current date and time, and formats it using the Moment service
   */
  getCurrentDateAndTime() {
    const currentIsoDate = new Date().toISOString();
    this.formattedDateTime = this._momentService.formatIsoDate(currentIsoDate);
  }

  /**
   * Retrieves weather forecast data from the backend API
   * @returns Observable<Weather[]> Observable emitting an array of weather forecast data
   */
  getWeatherForecast(): Observable<Weather[]> {
    const dataInLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.WEATHER_DATA_FORECAST);

    if (dataInLocalStorage) {
      // If data exists in local storage, log and return it
      console.log('Data fetched from local storage');
      this.getCurrentDateAndTime();
      return of(JSON.parse(dataInLocalStorage));
    } else {
      // If data does not exist in local storage, fetch from the backend API
      return this._http.get<WeatherForecast[]>(`${environment.urlLocalForecast}`).pipe(
        map(data => data[0].list),
        /**
         * Use catchError to handle any errors that occur during the HTTP request
         * @param error - the error response from the HTTP request
         * @returns Observable that throws a custom error message
         */
        catchError(this._errorHandleService.handleError)
      );
    }
  }

}

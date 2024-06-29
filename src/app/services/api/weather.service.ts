import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, of, tap } from "rxjs";
import { Weather, WeatherCurrent, WeatherForecast } from "../../models/weather";
import { environment } from "../../../environments/environment";
import { MomentService } from "../moment/moment.service";
import { LOCAL_STORAGE_KEYS } from "../../shared/global-variables/global-variables";

/**
 * Service to get weather data from backend API
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public formattedDateTime!: { date: string, time: string };

  private _http = inject(HttpClient);
  public _momentService = inject(MomentService);

  /**
   * Retrieves current weather data from the backend API or local storage
   * @returns Observable<WeatherCurrent[]> Observable emitting an array of current weather data
   */
  getWeatherCurrent(): Observable<WeatherCurrent[]> {
    const dataInLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.WEATHER_DATA);

    if (dataInLocalStorage) {
      // If data exists in local storage, log and return it
      console.log('Data fetched from local storage');
      this.getCurrentDateAndTime();
      return of(JSON.parse(dataInLocalStorage));
    } else {
      // If data does not exist in local storage, fetch from the backend API
      return this._http.get<WeatherCurrent[]>(`${environment.urlLocalCurrent}`).pipe(
        map(data => data),
        /**
         * Tap into the observable stream without modifying it,
         * then get current ISO date and format ISO date using Moment service
         */
        tap(_ => {
          this.getCurrentDateAndTime();
        })
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
    return this._http.get<WeatherForecast[]>(`${environment.urlLocalForecast}`).pipe(
      map(data => data[0].list)
    );
  }
}

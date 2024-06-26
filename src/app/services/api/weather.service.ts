import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { WeatherCurrent, WeatherForecast } from "../../models/weather";
import { environment } from "../../../environments/environment";
import { MomentService } from "../moment/moment.service";

/**
 * Service to get weather data from backend API
 * */
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private _http = inject(HttpClient)
  private _momentService = inject(MomentService)

  // Holds formatted date and time
  public formattedDateTime!: { date: string, time: string }

  /**
   * Retrieves weather data from the backend API
   * @returns Observable<WeatherCurrent[]> Observable emitting Weather current data array
   */
  getWeather(): Observable<WeatherCurrent[]> {
    return this._http.get<WeatherCurrent[]>(`${environment.urlLocalCurrent}`).pipe(
      /**
       * Tap into the observable stream without modifying it,
       * then get current ISO date and format ISO date using Moment service
       * */
      tap(_ => {
        const currentIsoDate = new Date().toISOString();
        this.formattedDateTime = this._momentService.formatIsoDate(currentIsoDate);
      })
    )
  }


  /**
   * Retrieves weather data from the backend API
   * @returns Observable<WeatherForecast[]> Observable emitting Weather forecast data array
   */
  getWeatherForecast(): Observable<WeatherForecast[]> {
    return this._http.get<WeatherForecast[]>(`${environment.urlLocalForecast}`).pipe(
      tap(data => console.log('Forecast: ', data)),
    )
  }

}

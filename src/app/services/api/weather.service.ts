import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Weather } from "../../models/weather";
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

  public formattedDateTime!: { date: string, time: string }

  /**
   * Retrieves weather data from the backend API
   * @returns Observable<Weather[]> Observable emitting Weather data array
   */
  getWeather(): Observable<Weather[]> {
    return this._http.get<Weather[]>(`${environment.urlLocal}`).pipe(
      tap(data => console.log(data)),
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

}

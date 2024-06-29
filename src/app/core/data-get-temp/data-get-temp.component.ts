import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from "../../services/api/weather.service";
import { Observable, tap } from "rxjs";
import { WeatherCurrent } from "../../models/weather";
import { LocalStorageService } from "../../services/local-storage/local-storage.service";
import { TranslateModule } from "@ngx-translate/core";

/**
 * Component responsible for displaying current weather information.
 */
@Component({
  selector: 'app-data-get-temp',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './data-get-temp.component.html'
})
export class DataGetTempComponent {

  private weatherService = inject(WeatherService)
  private _localStorageService = inject(LocalStorageService)

  // Observable holding weather data
  weatherData$: Observable<WeatherCurrent[]> = this.weatherService.getWeatherCurrent().pipe(
    tap(data => {
      return this._localStorageService.saveDataToLocalStorage(data);
    })
  )

}

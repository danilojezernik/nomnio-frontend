import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from "../../../services/api/weather.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-refresh-button',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './refresh-button.component.html'
})
export class RefreshButtonComponent {

  private _weatherService = inject(WeatherService)

  refreshData() {
    this._weatherService.getWeatherCurrent().subscribe()
    this._weatherService.getWeatherForecast().subscribe()
  }

}

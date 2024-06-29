import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { DataGetTimeComponent } from "./core/data-get-time/data-get-time.component";
import { DataGetTempComponent } from "./core/data-get-temp/data-get-temp.component";
import { DataGetForecastComponent } from "./core/data-get-forecast/data-get-forecast.component";
import { HeaderComponent } from "./core/header/header.component";
import { SpinnerComponent } from "./shared/components/spinner/spinner.component";
import { RefreshButtonComponent } from "./shared/components/refresh-button/refresh-button.component";
import { DateTransformPipe } from './pipes/date-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataGetTimeComponent,
    DataGetTempComponent,
    DataGetForecastComponent,
    HeaderComponent,
    SpinnerComponent,
    RefreshButtonComponent,
    DateTransformPipe
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

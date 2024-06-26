import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { DataGetTimeComponent } from "./components/data-get-time/data-get-time.component";
import { DataGetTempComponent } from "./components/data-get-temp/data-get-temp.component";
import { DataGetForecastComponent } from "./components/data-get-forecast/data-get-forecast.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        DataGetTimeComponent,
        DataGetTempComponent,
        DataGetForecastComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { DataGetTimeComponent } from "./components/data-get-time/data-get-time.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataGetTimeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

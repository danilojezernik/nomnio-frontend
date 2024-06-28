import { Injectable } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from "../../shared/global-variables/global-variables";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  saveDataToLocalStorage(data: any) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.WEATHER_DATA, JSON.stringify(data))
  }

}

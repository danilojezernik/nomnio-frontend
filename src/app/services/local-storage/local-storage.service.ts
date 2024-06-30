import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /**
   * Saves data to local storage.
   * @param storage The key under which to save the data in local storage.
   * @param data The data to be saved.
   */
  saveDataToLocalStorage(storage: string, data: any) {
    localStorage.setItem(storage, JSON.stringify(data)); // Convert data to JSON string and store in local storage
  }

}

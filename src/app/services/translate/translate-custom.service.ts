import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class TranslateCustomService {

  constructor(private _translate: TranslateService) {
    // Initialize TranslateService with default language and set current language
    _translate.setDefaultLang('si'); // Set default language to Slovenian
    _translate.use('en'); // Use Slovenian as the current language
  }

  // Function to toggle between 'en' (English) and 'si' (Slovenian)
  toggleLanguage(): void {
    // Get the current active language
    const currentLang = this._translate.currentLang;

    // Determine the language to switch to
    const newLang = currentLang === 'en' ? 'si' : 'en'; // Toggle between 'en' and 'si'

    // Switch to the new language
    this._translate.use(newLang); // Set the new language as the current language
  }

  // Function to return the text to display on the language toggle button
  getCurrentLanguageText(): string {
    // Return 'si' if current language is 'en', otherwise return 'en'
    return this._translate.currentLang === 'en' ? 'si' : 'en';
  }

}

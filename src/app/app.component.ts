import { Component, inject } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    // Initialize TranslateService with default language and set current language
    translate.setDefaultLang('en'); // Set default language to English
    translate.use('si'); // Use English as the current language
  }

  // Function to toggle between 'en' (English) and 'si' (Slovenian)
  toggleLanguage(): void {
    // Get the current active language
    const currentLang = this.translate.currentLang;

    // Determine the language to switch to
    const newLang = currentLang === 'en' ? 'si' : 'en'; // Toggle between 'en' and 'si'

    // Switch to the new language
    this.translate.use(newLang); // Set the new language as the current language
  }

  // Function to return the text to display on the language toggle button
  getCurrentLanguageText(): string {
    // Return 'si' if current language is 'en', otherwise return 'en'
    return this.translate.currentLang === 'en' ? 'si' : 'en';
  }

}

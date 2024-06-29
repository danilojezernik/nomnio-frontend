import { Component, inject } from '@angular/core';
import { TranslateCustomService } from "./services/translate/translate-custom.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  private _translateCustomService = inject(TranslateCustomService)

  // Method to handle language toggle button click
  toggleLanguageClick() {
    this._translateCustomService.toggleLanguage(); // Toggle language using service method
  }

  // Method to get current language text for display on button
  getCurrentLanguageTextOnButton() {
    return this._translateCustomService.getCurrentLanguageText(); // Get current language text from service
  }

}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public translate = inject(TranslateService)

  useLanguage(language: string): void {
    this.translate.use(language);
  }

}

import { inject, Pipe, PipeTransform } from '@angular/core';
import { MomentService } from "../services/moment/moment.service";

/**
 * Angular pipe to transform date values using MomentService.
 * The pipe is standalone and can be used without being declared in an NgModule.
 */
@Pipe({
  name: 'dateTransform',
  standalone: true,
})
export class DateTransformPipe implements PipeTransform {

  // Inject the MomentService to use its date formatting methods
  private _momentService = inject(MomentService);

  /**
   * Transforms a UNIX timestamp into a formatted date string using MomentService.
   * @param value The UNIX timestamp (in seconds) to transform.
   * @returns The formatted date string or the original value if it is falsy.
   */
  transform(value: number): any {

    // Return the original value if it is falsy (e.g., null or undefined)
    if (!value) return value;

    // Use MomentService to format the date (multiplying by 1000 to convert seconds to milliseconds)
    const formatted = this._momentService.formatDate(value * 1000);

    // Return the formatted date string
    return `${formatted.date} ${formatted.time}`;
  }

}

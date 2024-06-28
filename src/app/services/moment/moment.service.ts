import { Injectable } from '@angular/core';
import * as moment from 'moment';

/**
 * Service to handle date and time formatting using Moment.js
 */
@Injectable({
  providedIn: 'root'
})
export class MomentService {

  /**
   * Formats an ISO date string into separate date, hour, and minute values using Moment.js
   * @param isoDateString The ISO date string to format
   * @returns Object with formatted date and time
   */
  formatIsoDate(isoDateString: string): { date: string, time: string } {
    const formattedDate = moment(isoDateString)
    return {
      date: formattedDate.format("DD.MM.YYYY"),
      time: formattedDate.format("HH:mm")
    };
  }


}

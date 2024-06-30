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
   * Formats an ISO date string into separate date, hour, and minute values using Moment.js.
   * @param isoDateString The ISO date string to format.
   * @returns An object containing formatted date and time.
   */
  formatIsoDate(isoDateString: string): { date: string, time: string } {
    // Parse the ISO date string using Moment.js
    const formattedDate = moment(isoDateString);
    // Log the formatted date and hour for debugging purposes
    console.log(formattedDate.format("DD.MM.YYYY HH"));
    // Return the formatted date and time in separate fields
    return {
      date: formattedDate.format("DD.MM.YYYY"), // Format date as 'DD.MM.YYYY'
      time: formattedDate.format("HH:mm")       // Format time as 'HH:mm'
    };
  }

  /**
   * Formats a timestamp into a date string using Moment.js.
   * @param timestamp The timestamp to format.
   * @returns An object containing the formatted date.
   */
  formatDate(timestamp: number): { date: string, time: string } {
    // Parse the timestamp using Moment.js
    const formattedDate = moment(timestamp);
    // Return the formatted date in 'DD.MM.' format
    return {
      date: formattedDate.format("DD.MM."), // Format date as 'DD.MM.YYYY'
      time: formattedDate.format("HH:mm")       // Format time as 'HH:mm'
    };
  }

}

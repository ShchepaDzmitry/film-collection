import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return this.convertMinsIntoHoursAndMins(value as number);
  }

  convertMinsIntoHoursAndMins(duration: number) {
    let time = '';
    if (duration < 60) {
      time = `${duration}min`;
    } else {
      const hours = Math.floor(duration / 60);
      const minutes = duration - hours * 60;
      time = `${hours}h ${minutes}min`;
    }
    return time;
  }
}

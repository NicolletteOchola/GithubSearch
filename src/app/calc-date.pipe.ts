import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDate'
})
export class CalcDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}

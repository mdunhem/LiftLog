import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToWorkoutType'
})
export class ConvertToWorkoutTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      if (Array.isArray(value)) {
        value.forEach(element => {
          element.exerciseDefaults = Object.keys(element.exerciseDefaults);
        });
      } else {
        value.exerciseDefaults = Object.keys(value.exerciseDefaults);
      }
    }

    return value;
  }

}

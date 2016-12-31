import { Pipe, PipeTransform } from '@angular/core';

export class WorkoutType {
  key: string;
  name: string;
  exerciseDefaults: string[];
}

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

    console.log(value);
    return value;

    // var workoutTypeArray: WorkoutType[] = [];
    // if (value) {
    //   value.forEach(element => {
    //     var temp = {
    //       key: element.$key,
    //       name: element.name,
    //       exerciseDefaults: Object.keys(element.exerciseDefaults)
    //     };
    //     workoutTypeArray.push(temp);
    //   });
    // }
    // console.log(workoutTypeArray);
    // return workoutTypeArray;
  }

}

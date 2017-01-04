import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2';

import { AbstractLiftLogFirebaseDatabaseService } from './abstract-lift-log-firebase-database.service';
import { WorkoutType } from './model/workout-type';

@Injectable()
export class WorkoutTypeLiftLogFirebaseDatabaseService extends AbstractLiftLogFirebaseDatabaseService<WorkoutType> {

  constructor(protected firebase: AngularFireDatabase) {
    super(firebase);
    this.observableType = new WorkoutType();
  }

  protected map(value: any): WorkoutType {
    const workoutType = new WorkoutType();
    workoutType.$key = value.$key;
    workoutType.name = value.name;
    workoutType.exerciseDefaults = Object.keys(value.exerciseDefaults);
    return workoutType;
  }

}

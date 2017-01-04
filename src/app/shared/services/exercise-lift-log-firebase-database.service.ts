import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2';

import { AbstractLiftLogFirebaseDatabaseService } from './abstract-lift-log-firebase-database.service';
import { Exercise } from './model/exercise';

@Injectable()
export class ExerciseLiftLogFirebaseDatabaseService extends AbstractLiftLogFirebaseDatabaseService<Exercise> {

  constructor(protected firebase: AngularFireDatabase) {
    super(firebase);
    this.observableType = new Exercise();
  }

  protected map(value: any): Exercise {
    const exercise = new Exercise();
    exercise.$key = value.$key;
    exercise.name = value.name;
    exercise.reps = value.reps;
    exercise.sets = Object.keys(value.sets).length;
    exercise.weight = value.weight;
    return exercise;
  }

}
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2';
import { database } from 'firebase';

import { AbstractLiftLogFirebaseDatabaseService } from './abstract-lift-log-firebase-database.service';
import { Exercise } from './model/exercise';

@Injectable()
export class ExerciseLiftLogFirebaseDatabaseService extends AbstractLiftLogFirebaseDatabaseService<Exercise> {

  constructor(protected firebase: AngularFireDatabase) {
    super(firebase);
    this.observableType = new Exercise();
  }

  protected map(value: any): Exercise {
    const exercise = new Exercise(value);
    return exercise;
  }

  protected _convertToFirebaseAnyType(valueToConvert: Exercise): {} {
    return valueToConvert.saveableValue();
  }

}

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

}

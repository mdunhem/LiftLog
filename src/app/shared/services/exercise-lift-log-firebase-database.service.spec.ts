/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExerciseLiftLogFirebaseDatabaseService } from './exercise-lift-log-firebase-database.service';

describe('ExerciseLiftLogFirebaseDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseLiftLogFirebaseDatabaseService]
    });
  });

  it('should ...', inject([ExerciseLiftLogFirebaseDatabaseService], (service: ExerciseLiftLogFirebaseDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkoutTypeLiftLogFirebaseDatabaseService } from './workout-type-lift-log-firebase-database.service';

describe('WorkoutTypeLiftLogFirebaseDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutTypeLiftLogFirebaseDatabaseService]
    });
  });

  it('should ...', inject([WorkoutTypeLiftLogFirebaseDatabaseService], (service: WorkoutTypeLiftLogFirebaseDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});

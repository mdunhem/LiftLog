/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkoutTypeLiftLogFirebaseDatabaseService } from './workout-type-lift-log-firebase-database.service';
import { CoreModule } from '../../core/core.module'; // Need to create a dummy stub

describe('WorkoutTypeLiftLogFirebaseDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ CoreModule ],
      providers: [WorkoutTypeLiftLogFirebaseDatabaseService]
    });
  });

  it('should ...', inject([WorkoutTypeLiftLogFirebaseDatabaseService], (service: WorkoutTypeLiftLogFirebaseDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});

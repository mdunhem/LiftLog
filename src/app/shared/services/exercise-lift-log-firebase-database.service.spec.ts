/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExerciseLiftLogFirebaseDatabaseService } from './exercise-lift-log-firebase-database.service';
import { CoreModule } from '../../core/core.module'; // Need to create a dummy stub

describe('ExerciseLiftLogFirebaseDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ CoreModule ],
      providers: [ExerciseLiftLogFirebaseDatabaseService]
    });
  });

  it('should ...', inject([ExerciseLiftLogFirebaseDatabaseService], (service: ExerciseLiftLogFirebaseDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});

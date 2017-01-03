/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AbstractLiftLogFirebaseDatabaseService } from './abstract-lift-log-firebase-database.service';

describe('AbstractLiftLogFirebaseDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbstractLiftLogFirebaseDatabaseService]
    });
  });

  it('should ...', inject([AbstractLiftLogFirebaseDatabaseService], (service: AbstractLiftLogFirebaseDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});

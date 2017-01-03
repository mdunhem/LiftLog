import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Export for convenience
export { AngularFireDatabase } from 'angularfire2';

@Injectable()
export class WorkoutTypeFirebaseDatabaseStub {
  private listStubData = [
    [{ 'name': 'test1', exerciseDefaults: ['one'], $key: 'one' }]
  ];

  private objectStubData = [{ 'name': 'test1', exerciseDefaults: ['one'], key: 'one' }];

  list(name: string): Observable<any[]> {
    return  Observable.from(this.listStubData);
  }

  object(name: string): Observable<any> {
    return Observable.from(this.objectStubData);
  }
}

@Injectable()
export class ExerciseFirebaseDatabaseStub {
  private listStubData = [
    [{ 'name': 'test', $key: 'test' }]
  ];

  private objectStubData = [
    {
      name: 'test1',
      reps: 1,
      sets: { 1: false },
      weight: 1
    }
  ];

  list(name: string): Observable<any[]> {
    return  Observable.from(this.listStubData);
  }

  object(name: string): Observable<any> {
    return Observable.from(this.objectStubData);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseType, WorkoutType, Exercise } from '../app/shared';

// Export for convenience
export { AngularFireDatabase } from 'angularfire2';

@Injectable()
abstract class TestAbstractLiftLogFirebaseDatabaseService<T extends FirebaseType> {

  protected abstract listStubData: T[][];
  protected abstract objectStubData: T[];

  public list(): Observable<T[]> {
    return  Observable.from(this.listStubData);
  }

  public object(key: string): Observable<T> {
    return Observable.from(this.objectStubData);
  }

}

@Injectable()
export class TestWorkoutTypeLiftLogFirebaseDatabaseService extends TestAbstractLiftLogFirebaseDatabaseService<WorkoutType> {
  protected listStubData: WorkoutType[][] = [
    [new WorkoutType({ 'name': 'test1', exerciseDefaults: ['one'], $key: 'one' })]
  ];
  protected objectStubData: WorkoutType[] = [new WorkoutType({ 'name': 'test1', exerciseDefaults: ['one'], $key: 'one' })];
}

@Injectable()
export class TestExerciseLiftLogFirebaseDatabaseService extends TestAbstractLiftLogFirebaseDatabaseService<Exercise> {
  protected listStubData: Exercise[][] = [
    [new Exercise({ name: 'test1', reps: 1, sets: 1, weight: 1 })]
  ];
  protected objectStubData: Exercise[] = [new Exercise({ name: 'test1', reps: 1, sets: 1, weight: 1 })];
}

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

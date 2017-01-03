import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import 'rxjs/operator/switchMap';

import { FirebaseType } from './model/firebase-type';

@Injectable()
export abstract class AbstractLiftLogFirebaseDatabaseService<T extends FirebaseType> {

  protected observableType: T;

  constructor(protected firebase: AngularFireDatabase) { }

  public list(): Observable<T[]> {
    return this.firebase.list(this.observableType.firebasePath).map<any[], T[]>(value => <T[]>value);
  }

  public object(): Observable<T> {
    return this.firebase.object(this.observableType.firebasePath).map<any, T>(value => <T>value);
  }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { map, MapOperator } from 'rxjs/operator/map';

import { FirebaseType } from './model/firebase-type';

@Injectable()
export abstract class AbstractLiftLogFirebaseDatabaseService<T extends FirebaseType> {

  protected observableType: T;

  constructor(protected firebase: AngularFireDatabase) { }

  protected abstract map(value: any): T;

  public list(): Observable<T[]> {
    return this.firebase.list(this.observableType.firebasePath).lift<any[], T[]>(new MapOperator<any[], T[]>(value => {
      const list: T[] = [];
      value.forEach(element => {
        list.push(this.map(element));
      });
      return list;
    }, this));
  }

  public object(key: string): Observable<T> {
    return this.firebase.object(this.observableType.firebasePath + '/' + key).lift<any, T>(new MapOperator<any, T>(value => this.map(value), this));
  }

}

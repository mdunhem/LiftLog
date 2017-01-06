import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { map, MapOperator } from 'rxjs/operator/map';

import { FirebaseType } from './model/firebase-type';

@Injectable()
export abstract class AbstractLiftLogFirebaseDatabaseService<T extends FirebaseType> {

  protected observableType: T;

  protected firebaseListObservable: FirebaseListObservable<T[]>;
  protected firebaseObjectObservable: FirebaseObjectObservable<T>;

  constructor(protected firebase: AngularFireDatabase) { }

  protected abstract map(value: any): T;

  public list(): FirebaseListObservable<T[]> {
    this.firebaseListObservable = <FirebaseListObservable<T[]>>this.firebase.list(this.observableType.firebasePath)
      .lift<any[], T[]>(new MapOperator<any[], T[]>(value => {
        const list: T[] = [];
        value.forEach(element => {
          list.push(this.map(element));
        });
        return list;
      }, this));
    return this.firebaseListObservable;
  }

  public object(key: string): FirebaseObjectObservable<T> {
    this.firebaseObjectObservable = <FirebaseObjectObservable<T>>this.firebase.object(this.observableType.firebasePath + '/' + key)
      .lift<any, T>(new MapOperator<any, T>(value => this.map(value), this));
    return this.firebaseObjectObservable;
  }

  // TODO: make this more type safe
  public updateList(value: T) {
    console.log(value);
    console.log(this._convertToFirebaseAnyType(value));
    this.firebaseListObservable.update(value.$key, this._convertToFirebaseAnyType(value));
  }

  protected abstract _convertToFirebaseAnyType(valueToConvert: T): {};

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseDatabaseStub {
  private listStubData = [
    [{ 'name': 'test1', exerciseDefaults: ['one'], $key: 'one' }]
  ];

  private objectStubData = [{ 'name': 'test1', exerciseDefaults: ['one'], $key: 'one' }];

  list(name: string): Observable<any[]> {
    return  Observable.from(this.listStubData);
  }

  object(name: string): Observable<any> {
    return Observable.from(this.objectStubData);
  }
}

// @NgModule({
//   declarations: [
    
//   ],
//   exports: [
    
//   ]
// })
// export class FirebaseStubsModule { }

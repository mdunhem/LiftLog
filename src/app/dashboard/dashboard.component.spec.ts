/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2';

import { DashboardComponent } from './dashboard.component';
import { Observable } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let angularFireDatabaseStub: {
    list(name: string): Observable<any[]>;
  }

  beforeEach(async(() => {
    angularFireDatabaseStub = {
      list(name: string): Observable<any[]> {
        let stubData = [
          [{ 'name': 'test1' }]
        ];
        return  Observable.from(stubData);
      }
    }

    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        { provide: AngularFireDatabase, useValue: angularFireDatabaseStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

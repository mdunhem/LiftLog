/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseDatabaseStub,
  TwoColumnLayoutStubComponent
} from '../../testing';

import { WorkoutTypeComponent } from './workout-type.component';

describe('WorkoutTypeComponent', () => {
  let component: WorkoutTypeComponent;
  let fixture: ComponentFixture<WorkoutTypeComponent>;

  beforeEach(async(() => {
    let firebaseDatabaseStub = new FirebaseDatabaseStub();
    TestBed.configureTestingModule({
      declarations: [
        WorkoutTypeComponent,
        TwoColumnLayoutStubComponent
      ],
      providers: [
        { provide: AngularFireDatabase, useValue: firebaseDatabaseStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

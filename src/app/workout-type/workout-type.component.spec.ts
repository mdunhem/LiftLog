/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  AngularFireDatabase,
  WorkoutTypeFirebaseDatabaseStub,
  TwoColumnLayoutStubComponent
} from '../../testing';

import { WorkoutTypeComponent } from './workout-type.component';

describe('WorkoutTypeComponent', () => {
  let component: WorkoutTypeComponent;
  let fixture: ComponentFixture<WorkoutTypeComponent>;

  beforeEach(async(() => {
    let workoutTypeFirebaseDatabaseStub = new WorkoutTypeFirebaseDatabaseStub();
    TestBed.configureTestingModule({
      declarations: [
        WorkoutTypeComponent,
        TwoColumnLayoutStubComponent
      ],
      providers: [
        { provide: AngularFireDatabase, useValue: workoutTypeFirebaseDatabaseStub }
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

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  AngularFireDatabase,
  ExerciseFirebaseDatabaseStub,
  TwoColumnLayoutStubComponent
} from '../../testing';

import { ExercisesComponent } from './exercises.component';

describe('ExercisesComponent', () => {
  let component: ExercisesComponent;
  let fixture: ComponentFixture<ExercisesComponent>;

  beforeEach(async(() => {
    let exerciseFirebaseDatabaseStub = new ExerciseFirebaseDatabaseStub();
    TestBed.configureTestingModule({
      declarations: [
        ExercisesComponent,
        TwoColumnLayoutStubComponent
      ],
      providers: [
        { provide: AngularFireDatabase, useValue: exerciseFirebaseDatabaseStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

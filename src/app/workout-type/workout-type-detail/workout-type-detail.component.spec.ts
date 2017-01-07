/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { ActivatedRouteStub, ActivatedRoute } from '../../../testing/router-stubs';

import { ExerciseLiftLogFirebaseDatabaseService, WorkoutTypeLiftLogFirebaseDatabaseService } from '../../shared';
import { TestExerciseLiftLogFirebaseDatabaseService, TestWorkoutTypeLiftLogFirebaseDatabaseService } from '../../../testing';

import { WorkoutTypeDetailComponent } from './workout-type-detail.component';

describe('WorkoutTypeDetailComponent', () => {
  let component: WorkoutTypeDetailComponent;
  let fixture: ComponentFixture<WorkoutTypeDetailComponent>;

  beforeEach(async(() => {
    let activatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.testParams = { key: '1' };
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ WorkoutTypeDetailComponent ],
      providers: [
        FormBuilder,
        { provide: WorkoutTypeLiftLogFirebaseDatabaseService, useClass: TestWorkoutTypeLiftLogFirebaseDatabaseService },
        { provide: ExerciseLiftLogFirebaseDatabaseService, useClass: TestExerciseLiftLogFirebaseDatabaseService },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { ExerciseDetailComponent } from './exercise-detail.component';

import { ActivatedRouteStub, ActivatedRoute } from '../../../testing/router-stubs';

import { SharedModule, ExerciseLiftLogFirebaseDatabaseService } from '../../shared';
import { TestExerciseLiftLogFirebaseDatabaseService } from '../../../testing'; // Need to change this to a testing stub

describe('ExerciseDetailComponent', () => {
  let component: ExerciseDetailComponent;
  let fixture: ComponentFixture<ExerciseDetailComponent>;

  beforeEach(async(() => {
    let activatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.testParams = { key: '1' };
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ ExerciseDetailComponent ],
      providers: [
        FormBuilder,
        { provide: ExerciseLiftLogFirebaseDatabaseService, useClass: TestExerciseLiftLogFirebaseDatabaseService },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

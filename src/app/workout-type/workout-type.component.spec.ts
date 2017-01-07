/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { RouterStub, TestWorkoutTypeLiftLogFirebaseDatabaseService, TwoColumnLayoutStubComponent } from '../../testing';
import { WorkoutTypeLiftLogFirebaseDatabaseService } from '../shared';
import { WorkoutTypeComponent } from './workout-type.component';

describe('WorkoutTypeComponent', () => {
  let component: WorkoutTypeComponent;
  let fixture: ComponentFixture<WorkoutTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WorkoutTypeComponent,
        TwoColumnLayoutStubComponent
      ],
      providers: [
        { provide: WorkoutTypeLiftLogFirebaseDatabaseService, useClass: TestWorkoutTypeLiftLogFirebaseDatabaseService },
        { provide: Router, useClass: RouterStub }
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

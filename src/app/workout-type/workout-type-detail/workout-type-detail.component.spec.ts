/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActivatedRouteStub, ActivatedRoute } from '../../../testing/router-stubs';

import { SharedModule } from '../../shared/shared.module';
import { AngularFireDatabase, WorkoutTypeFirebaseDatabaseStub } from '../../../testing/firebase-stubs';

import { WorkoutTypeDetailComponent } from './workout-type-detail.component';

describe('WorkoutTypeDetailComponent', () => {
  let component: WorkoutTypeDetailComponent;
  let fixture: ComponentFixture<WorkoutTypeDetailComponent>;

  beforeEach(async(() => {
    let workoutTypeFirebaseDatabaseStub = new WorkoutTypeFirebaseDatabaseStub();
    let activatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.testParams = { key: '' };
    TestBed.configureTestingModule({
      imports: [ SharedModule],
      declarations: [ WorkoutTypeDetailComponent ],
      providers: [
        { provide: AngularFireDatabase, useValue: workoutTypeFirebaseDatabaseStub },
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

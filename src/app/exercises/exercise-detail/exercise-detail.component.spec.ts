/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ExerciseDetailComponent } from './exercise-detail.component';

import { ActivatedRouteStub, ActivatedRoute } from '../../../testing/router-stubs';

import { SharedModule } from '../../shared/shared.module';
import { ExerciseLiftLogFirebaseDatabaseService } from '../../shared'; // Need to change this to a testing stub

describe('ExerciseDetailComponent', () => {
  let component: ExerciseDetailComponent;
  let fixture: ComponentFixture<ExerciseDetailComponent>;

  beforeEach(async(() => {
    let activatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.testParams = { key: '' };
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, SharedModule ],
      declarations: [ ExerciseDetailComponent ],
      providers: [
        ExerciseLiftLogFirebaseDatabaseService,
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

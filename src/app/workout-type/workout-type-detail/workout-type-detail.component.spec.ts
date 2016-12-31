/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AngularFireDatabase, FirebaseDatabaseStub } from '../../../testing/firebase-stubs';

import { WorkoutTypeDetailComponent } from './workout-type-detail.component';

describe('WorkoutTypeDetailComponent', () => {
  let component: WorkoutTypeDetailComponent;
  let fixture: ComponentFixture<WorkoutTypeDetailComponent>;

  beforeEach(async(() => {
    let firebaseDatabaseStub = new FirebaseDatabaseStub();
    TestBed.configureTestingModule({
      imports: [ SharedModule],
      declarations: [ WorkoutTypeDetailComponent ],
      providers: [
        { provide: AngularFireDatabase, useValue: firebaseDatabaseStub }
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

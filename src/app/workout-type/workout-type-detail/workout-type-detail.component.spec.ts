/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { WorkoutTypeDetailComponent } from './workout-type-detail.component';

describe('WorkoutTypeDetailComponent', () => {
  let component: WorkoutTypeDetailComponent;
  let fixture: ComponentFixture<WorkoutTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ SharedModule],
      declarations: [ WorkoutTypeDetailComponent ]
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

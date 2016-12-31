/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, Input } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AngularFireDatabase, FirebaseDatabaseStub } from '../../../testing/firebase-stubs';

import { WorkoutTypeListComponent } from './workout-type-list.component';

@Component({selector: 'app-workout-type-detail', template: ''})
export class WorkoutTypeDetailStubComponent {
  @Input() key: string;
}

describe('WorkoutTypeListComponent', () => {
  let component: WorkoutTypeListComponent;
  let fixture: ComponentFixture<WorkoutTypeListComponent>;

  beforeEach(async(() => {
    let firebaseDatabaseStub = new FirebaseDatabaseStub();
    TestBed.configureTestingModule({
      imports: [ SharedModule],
      declarations: [ WorkoutTypeListComponent, WorkoutTypeDetailStubComponent ],
      providers: [
        { provide: AngularFireDatabase, useValue: firebaseDatabaseStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

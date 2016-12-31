import { NgModule, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({selector: 'app-workout-type-detail', template: ''})
export class WorkoutTypeDetailStubComponent {
  @Input() key: string;
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkoutTypeDetailStubComponent],
  exports: [
    WorkoutTypeDetailStubComponent
  ]
})
export class TestingModule { }

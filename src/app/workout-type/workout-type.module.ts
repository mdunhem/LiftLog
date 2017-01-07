import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { WorkoutTypeComponent } from './workout-type.component';
import { WorkoutTypeListComponent } from './workout-type-list/workout-type-list.component';
import { WorkoutTypeDetailComponent } from './workout-type-detail/workout-type-detail.component';
import { WorkoutTypeRoutingModule } from './workout-type-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    WorkoutTypeRoutingModule
  ],
  declarations: [WorkoutTypeComponent, WorkoutTypeListComponent, WorkoutTypeDetailComponent]
})
export class WorkoutTypeModule { }

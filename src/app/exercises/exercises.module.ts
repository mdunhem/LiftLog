import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ExercisesRoutingModule } from './exercises-routing.module';

import { ExercisesComponent } from './exercises.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ExercisesRoutingModule
  ],
  declarations: [
    ExercisesComponent,
    ExerciseDetailComponent
  ]
})
export class ExercisesModule { }

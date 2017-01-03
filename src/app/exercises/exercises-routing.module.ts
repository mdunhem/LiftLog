import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExercisesComponent } from './exercises.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';

const routes: Routes = [
  {
      path: 'exercises',
      component: ExercisesComponent,
      children: [
        {
          path: ':key',
          component: ExerciseDetailComponent
        }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExercisesRoutingModule { }

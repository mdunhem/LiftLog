import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth';
import { WorkoutTypeComponent } from './workout-type.component';
import { WorkoutTypeListComponent } from './workout-type-list/workout-type-list.component';
import { WorkoutTypeDetailComponent } from './workout-type-detail/workout-type-detail.component';

const routes: Routes = [
  {
      path: 'workout-type',
      component: WorkoutTypeComponent,
      canActivate: [ AuthGuard ],
      children: [
        {
          path: ':key',
          component: WorkoutTypeDetailComponent
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
export class WorkoutTypeRoutingModule { }
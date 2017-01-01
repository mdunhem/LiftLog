import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'workout-type', pathMatch: 'full' }
    // { path: 'dashboard', loadChildren: 'app/page/home.module#HomeModule' },
    // { path: 'edit/:id', loadChildren: 'app/page/edit-workout.module#EditWorkoutModule' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

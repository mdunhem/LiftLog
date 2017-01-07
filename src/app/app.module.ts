import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { WidgetsModule } from './widgets/widgets.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginRoutingModule }      from './login/login-routing.module';

import { AppComponent } from './app.component';
import { WorkoutTypeModule } from './workout-type/workout-type.module';
import { ExercisesModule } from './exercises/exercises.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    DashboardModule,
    WorkoutTypeModule,
    ExercisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

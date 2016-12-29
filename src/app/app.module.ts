import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { WidgetsModule } from './widgets/widgets.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { WorkoutTypeModule } from './workout-type/workout-type.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    DashboardModule,
    WorkoutTypeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

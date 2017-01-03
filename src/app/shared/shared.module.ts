import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConvertToWorkoutTypePipe } from './pipes/convert-to-workout-type.pipe';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { TwoColumnLayoutComponent } from './two-column-layout/two-column-layout.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MainLayoutComponent, SideNavComponent, NavbarComponent, ConvertToWorkoutTypePipe, TitleBarComponent, TwoColumnLayoutComponent],
  exports: [
    MainLayoutComponent,
    SideNavComponent,
    NavbarComponent,
    ConvertToWorkoutTypePipe,
    TitleBarComponent,
    TwoColumnLayoutComponent
  ]
})
export class SharedModule { }

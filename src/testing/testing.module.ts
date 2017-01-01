import { NgModule, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavItems } from '../app/shared';

@Component({selector: 'app-workout-type-detail', template: ''})
export class WorkoutTypeDetailStubComponent {
  @Input() key: string;
}

@Component({selector: 'side-nav', template: ''})
export class SideNavStubComponent {
  @Input() navItems: NavItems;
}

@Component({selector: 'app-title-bar', template: ''})
export class TitleBarStubComponent {}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkoutTypeDetailStubComponent, SideNavStubComponent, TitleBarStubComponent],
  exports: [
    WorkoutTypeDetailStubComponent,
    SideNavStubComponent,
    TitleBarStubComponent
  ]
})
export class TestingModule { }

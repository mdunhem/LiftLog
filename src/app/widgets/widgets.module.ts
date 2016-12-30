import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [ToolbarComponent, DrawerComponent],
  exports: [
    LayoutModule,
    ToolbarComponent,
    DrawerComponent
  ]
})
export class WidgetsModule { }

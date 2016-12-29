import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { DrawerComponent } from './drawer/drawer.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ],
  declarations: [ToolbarComponent, DrawerComponent, TableComponent],
  exports: [
    LayoutModule,
    ToolbarComponent,
    DrawerComponent,
    TableComponent
  ]
})
export class WidgetsModule { }

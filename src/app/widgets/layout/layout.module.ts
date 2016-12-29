import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RowComponent } from './row/row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContainerComponent, RowComponent],
  exports: [
    ContainerComponent,
    RowComponent
  ]
})
export class LayoutModule { }

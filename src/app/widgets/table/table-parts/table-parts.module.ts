import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableRowComponent } from './table-row/table-row.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableHeadComponent, TableBodyComponent, TableRowComponent],
  exports: [
    TableHeadComponent,
    TableBodyComponent,
    TableRowComponent
  ]
})
export class TablePartsModule { }

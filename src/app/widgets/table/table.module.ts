import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePartsModule } from './table-parts/table-parts.module';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    TablePartsModule
  ],
  declarations: [TableComponent],
  exports: [
    TableComponent
  ]
})
export class TableModule { }

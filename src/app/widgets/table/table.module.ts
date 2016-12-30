import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePartsModule } from './table-parts/table-parts.module';
// import { TableRowComponent } from './table-parts/table-row/table-row.component';

@NgModule({
  imports: [
    CommonModule,
    TablePartsModule
  ],
  declarations: [],
  exports: [
    // TablePartsModule
  ]
})
export class TableModule { }

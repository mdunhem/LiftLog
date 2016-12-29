import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

export enum TableRowModelEventType {
  added, moved, removed, value
}

export interface TableRowModelEvent {
  target: TableRowModel;
  event: TableRowModelEventType;
}

export interface TableRowModel {
  items: string[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  host: {
    'class': 'responsive-table'
  }
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() rows: Observable<TableRowModelEvent>

  @Input() tableHeaderTitles: string[] = [
    '#',
    'Header1',
    'Header2',
    'Header3',
    'Header4'
  ];

  @Input() tableRows: string[][] = [
    ['1,001', 'Lorem', 'ipsum', 'dolor', 'sit']
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.rows.subscribe(tableRowModelEvent => {

    })
  }

  private addRow() {}

}

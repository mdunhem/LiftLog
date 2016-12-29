import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'thead [table-head]',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss']
})
export class TableHeadComponent implements OnInit {

  @Input() tableHeaders: string[];

  constructor() { }

  ngOnInit() {
    console.log('created');
  }

}

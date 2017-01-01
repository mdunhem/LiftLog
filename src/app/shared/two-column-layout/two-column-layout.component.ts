import { Component, OnInit, Input } from '@angular/core';
import { NavItems } from '../';

@Component({
  selector: 'app-two-column-layout',
  templateUrl: './two-column-layout.component.html',
  styleUrls: ['./two-column-layout.component.scss']
})
export class TwoColumnLayoutComponent implements OnInit {

  @Input() title: string = '';

  @Input() navItems: NavItems = {
    items: []
  };

  constructor() { }

  ngOnInit() {
  }

}

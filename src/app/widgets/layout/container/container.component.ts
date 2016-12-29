import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  host: {
    'class': 'container'
  }
})
export class ContainerComponent implements OnInit {

  @Input() fluid: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

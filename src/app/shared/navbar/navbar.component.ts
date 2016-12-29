import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    'class': 'navbar navbar-fixed-top navbar-dark bg-primary has-shadow'
  }
})
export class NavbarComponent implements OnInit {

  @Input() appName: string = 'Workouts';

  constructor() { }

  ngOnInit() {
  }

}

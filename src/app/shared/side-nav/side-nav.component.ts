import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

   navItems = [
    { name: 'Dashboard', route: 'dashboard' },
    { name: 'Workout Types', route: 'workout-type' }
  ]

  constructor() { }

  ngOnInit() {
  }

}

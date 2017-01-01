import { Component, OnInit, Input } from '@angular/core';

export interface NavItems {
  items: { name: string, route: string }[];
}

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

   @Input() navItems: NavItems = {
     items: [
        { name: 'Dashboard', route: 'dashboard' },
        { name: 'Workout Types', route: 'workout-type' }
      ]
   }
    

  constructor() { }

  ngOnInit() {
  }

}

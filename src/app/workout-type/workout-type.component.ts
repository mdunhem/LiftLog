import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorkoutTypeLiftLogFirebaseDatabaseService, WorkoutType } from '../shared/services';
import { NavItems } from '../shared/side-nav/side-nav.component';

@Component({
  selector: 'app-workout-type',
  templateUrl: './workout-type.component.html',
  styleUrls: ['./workout-type.component.scss']
})
export class WorkoutTypeComponent implements OnInit {

  title: string = 'Workout Types';

  navItems: NavItems = {
    items: []
  };

  constructor(private firebase: WorkoutTypeLiftLogFirebaseDatabaseService, private router: Router) { }

  ngOnInit() {
    this.firebase.list().subscribe(value => {
      this.navItems.items = [];
      value.forEach(element => {
        this.navItems.items.push({name: element.name, route: element.$key});
      });
    })
  }

  newWorkoutType() {
    this.firebase.object().subscribe(workoutType => {
      this.router.navigate(['workout-type', workoutType.$key]);
    });
  }

}

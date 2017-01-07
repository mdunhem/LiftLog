import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExerciseLiftLogFirebaseDatabaseService, Exercise } from '../shared/services';

import { NavItems } from '../shared/side-nav/side-nav.component';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  title: string = 'Exercises';

  navItems: NavItems = {
    items: []
  };

  constructor(private firebase: ExerciseLiftLogFirebaseDatabaseService, private router: Router) { }

  ngOnInit() {
    this.firebase.list().subscribe(exercises => {
      this.navItems.items = [];
      exercises.forEach(exercise => {
        this.navItems.items.push({name: exercise.name, route: exercise.$key});
      });
    });
  }

  newExercise() {
    this.firebase.object().subscribe(exercise => {
      this.router.navigate(['exercises', exercise.$key]);
    });
  }

}

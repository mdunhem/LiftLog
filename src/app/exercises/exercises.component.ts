import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

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

  constructor(private firebase: ExerciseLiftLogFirebaseDatabaseService) { }

  ngOnInit() {
    this.firebase.list().subscribe(exercises => {
      this.navItems.items = [];
      exercises.forEach(exercise => {
        this.navItems.items.push({name: exercise.name, route: exercise.$key});
      });
    });

    // this.firebase.list('exerciseDefaults').subscribe(value => {
    //   this.navItems.items = [];
    //   value.forEach(element => {
    //     this.navItems.items.push({name: element.name, route: element.$key});
    //   });
    // })
  }

}

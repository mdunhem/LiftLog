import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { NavItems } from '../shared/side-nav/side-nav.component';

@Component({
  selector: 'app-workout-type',
  templateUrl: './workout-type.component.html',
  styleUrls: ['./workout-type.component.scss']
})
export class WorkoutTypeComponent implements OnInit {

  title: string = 'Workout Types';
  workoutTypes: FirebaseListObservable<any[]>;

  navItems: NavItems = {
    items: []
  };

  constructor(private firebase: AngularFireDatabase) { }

  ngOnInit() {
    // this.workoutTypes = this.firebase.list('workoutTypes');
    this.firebase.list('workoutTypes').subscribe(value => {
      this.navItems.items = [];
      console.log(value);
      value.forEach(element => {
        this.navItems.items.push({name: element.name, route: element.$key});
      });
    })
  }

}

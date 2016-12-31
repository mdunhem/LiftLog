import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';

export class WorkoutType {
  key: string;
  name: string;
  exerciseDefaults: string[];
}

@Component({
  selector: 'app-workout-type-list',
  templateUrl: './workout-type-list.component.html',
  styleUrls: ['./workout-type-list.component.scss']
})
export class WorkoutTypeListComponent implements OnInit {

  workoutTypes: FirebaseListObservable<any[]>;
  exerciseDefaults: FirebaseListObservable<any[]>;

  constructor(private firebase: AngularFireDatabase) { }

  ngOnInit() {
    this.workoutTypes = this.firebase.list('workoutTypes');
    this.exerciseDefaults = this.firebase.list('exerciseDefaults');
  }

}

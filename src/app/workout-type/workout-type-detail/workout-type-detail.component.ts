import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-workout-type-detail',
  templateUrl: './workout-type-detail.component.html',
  styleUrls: ['./workout-type-detail.component.scss']
})
export class WorkoutTypeDetailComponent implements OnInit {

  @Input() key: string;

  workoutType: FirebaseObjectObservable<any>;
  exerciseDefaults: FirebaseListObservable<any[]>;

  constructor(private firebase: AngularFireDatabase) { }

  ngOnInit() {
    this.workoutType = this.firebase.object('workoutTypes/' + this.key);
    this.exerciseDefaults = this.firebase.list('exerciseDefaults');
  }

}

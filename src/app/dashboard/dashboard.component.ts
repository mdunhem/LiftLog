import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  workouts: FirebaseListObservable<any[]>;
  exerciseDefaults: FirebaseListObservable<any[]>;
  workoutTypes: FirebaseListObservable<any[]>;

  constructor(private firebase: AngularFireDatabase) { 
    // this.title = title;
  }

  ngOnInit() {
    // this.firebase.list('workouts')
    //   .subscribe(data => {
    //     data.forEach(value => {
    //       console.log(value);
    //       var dateArray = new Array<string>(value.date.toString());
    //       this.rows.push(dateArray);
    //     });
    //   });

    this.exerciseDefaults = this.firebase.list('exerciseDefaults');
    this.workoutTypes = this.firebase.list('workoutTypes');
  }

}

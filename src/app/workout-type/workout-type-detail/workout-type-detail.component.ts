import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-workout-type-detail',
  templateUrl: './workout-type-detail.component.html',
  styleUrls: ['./workout-type-detail.component.scss']
})
export class WorkoutTypeDetailComponent implements OnInit {

  @Input() key: string;

  workoutType: Observable<any>;
  exerciseDefaults: FirebaseListObservable<any[]>;

  constructor(private firebase: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.workoutType = this.firebase.object('workoutTypes/' + params['key']);
    });
    this.exerciseDefaults = this.firebase.list('exerciseDefaults');
  }

}

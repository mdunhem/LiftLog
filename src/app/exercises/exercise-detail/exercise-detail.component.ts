import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.scss']
})
export class ExerciseDetailComponent implements OnInit {

  @Input() key: string;

  exercise: Observable<any>;

  constructor(private firebase: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.exercise = this.firebase.object('exerciseDefaults/' + params['key']);
    });
  }

}

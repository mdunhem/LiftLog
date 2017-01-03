import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.scss']
})
export class ExerciseDetailComponent implements OnInit {

  form: FormGroup;

  @Input() key: string;

  exercise: Observable<any>;

  constructor(private formBuilder: FormBuilder, private firebase: AngularFireDatabase, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      name: '',
      reps: '',
      sets: '',
      weight: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.exercise = this.firebase.object('exerciseDefaults/' + params['key']);
      this.exercise.subscribe(value => {
        this.form.setValue({
          name: value.name,
          reps: +value.reps,
          sets: Object.keys(value.sets).length,
          weight: +value.weight
        });
      });
    });
  }

}

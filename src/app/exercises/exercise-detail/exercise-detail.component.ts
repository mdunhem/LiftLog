import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

import { ExerciseLiftLogFirebaseDatabaseService, Exercise } from '../../shared/services';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.scss']
})
export class ExerciseDetailComponent implements OnInit {

  form: FormGroup;

  @Input() key: string;

  private _exerciseObservable: Observable<Exercise>;
  private _exercise: Exercise;

  constructor(private formBuilder: FormBuilder, private firebase: ExerciseLiftLogFirebaseDatabaseService, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      name: '',
      reps: '',
      sets: '',
      weight: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this._exerciseObservable = this.firebase.object(params['key']);
      this._exerciseObservable.subscribe(value => {
        this._exercise = value;
        this.form.setValue({
          name: value.name,
          reps: value.reps,
          sets: value.sets,
          weight: value.weight
        });
      });
    });
  }

  submit() {
    this._exercise.name = this.form.value.name;
    this._exercise.reps = this.form.value.reps;
    this._exercise.sets = this.form.value.sets;
    this._exercise.weight = this.form.value.weight;
    this.firebase.updateList(this._exercise);
  }

}

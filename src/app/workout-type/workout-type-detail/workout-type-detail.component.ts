import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import {
  WorkoutTypeLiftLogFirebaseDatabaseService,
  ExerciseLiftLogFirebaseDatabaseService,
  WorkoutType,
  Exercise
} from '../../shared/services';

@Component({
  selector: 'app-workout-type-detail',
  templateUrl: './workout-type-detail.component.html',
  styleUrls: ['./workout-type-detail.component.scss']
})
export class WorkoutTypeDetailComponent implements OnInit {

  form: FormGroup;

  @Input() key: string;

  workoutType: Observable<WorkoutType>;
  exerciseDefaults: Observable<Exercise[]>;

  constructor(
    private formBuilder: FormBuilder,
    private workoutTypeFirebaseService: WorkoutTypeLiftLogFirebaseDatabaseService,
    private exerciseDefaultsFirebaseService: ExerciseLiftLogFirebaseDatabaseService,
    private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      name: '',
      exerciseDefaults: ['']
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.workoutType = this.workoutTypeFirebaseService.object(params['key']);
      this.workoutType.subscribe(value => {
        this.form.setValue({
          name: value.name,
          exerciseDefaults: value.exerciseDefaults
        });
      });
    });
    this.exerciseDefaults = this.exerciseDefaultsFirebaseService.list();
  }

  submit() {
    console.log('Submitted');
    console.log(this.form.value);
  }

}

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

  private workoutType: WorkoutType;

  form: FormGroup;

  @Input() key: string;

  workoutTypeObservable: Observable<WorkoutType>;
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
      this.workoutTypeObservable = this.workoutTypeFirebaseService.object(params['key']);
      this.workoutTypeObservable.subscribe(value => {
        this.workoutType = value;
        this.form.setValue({
          name: this.workoutType.name,
          exerciseDefaults: this.workoutType.keys
        });
      });
    });
    this.exerciseDefaults = this.exerciseDefaultsFirebaseService.list();
  }

  submit() {
    this.workoutType.name = this.form.value.name;
    this.workoutType.keys = this.form.value.exerciseDefaults;
    this.workoutTypeFirebaseService.updateList(this.workoutType);
  }

}

import { FirebaseType } from './firebase-type';

export class WorkoutType implements FirebaseType {
    firebasePath: string = 'workoutTypes';
    $key: string;
    name: string;
    exerciseDefaults: string[];
}

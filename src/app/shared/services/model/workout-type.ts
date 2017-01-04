import { FirebaseType } from './firebase-type';

export class WorkoutType implements FirebaseType {
    firebasePath: string = 'exerciseDefaults/';
    $key: string;
    name: string;
    exerciseDefaults: string[];
}

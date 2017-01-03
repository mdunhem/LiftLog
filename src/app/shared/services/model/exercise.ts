import { FirebaseType } from './firebase-type';

export class Exercise implements FirebaseType {
    firebasePath: string = 'exerciseDefaults/';

    name: string;
    reps: number;
    sets: number;
    weight: number;
}

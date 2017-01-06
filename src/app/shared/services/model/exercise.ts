import { FirebaseType } from './firebase-type';

export class Exercise implements FirebaseType {
    firebasePath: string = 'exerciseDefaults';
    $key: string;
    name: string;
    reps: number;
    sets: Map<number, boolean>;
    weight: number;
}

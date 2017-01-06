import { FirebaseType } from './firebase-type';

export class Exercise implements FirebaseType {
    firebasePath: string = 'exerciseDefaults';
    $key: string = '';
    name: string = '';
    reps: number = 0;
    _sets: Map<number, boolean>;
    weight: number = 0;

    constructor(firebaseAnyType: any = null) {
        if (firebaseAnyType) {
            this.$key = firebaseAnyType.$key;
            if (firebaseAnyType.name) {
                this.name = firebaseAnyType.name;
            }
            if (firebaseAnyType.reps) {
                this.reps = firebaseAnyType.reps;
            }
            if (firebaseAnyType.weight) {
                this.weight = firebaseAnyType.weight;
            }
            this._sets = new Map<number, boolean>();
            if (firebaseAnyType.sets) {
                for (const key of Object.keys(firebaseAnyType.sets)) {
                    this._sets.set(+key, firebaseAnyType.sets[key]);
                }
            }
        }
    }

    get sets(): number {
        return this._sets.size;
    }

    set sets(newValue: number) {
        this._sets = new Map<number, boolean>();
        if (newValue > 0) {
            for (let i = 0; i < newValue; i++) {
                this._sets.set(i, false);
            }
        } else {
            this._sets.set(0, false); // Need to make sure that we don't send an empty object back to firebase
        }
    }

    saveableValue(): any {
        const sets = {};
        this._sets.forEach((value: boolean, key: number) => {
            sets[key] = value;
        });
        return { name: this.name, reps: this.reps, sets: sets, weight: this.weight };
    }
}

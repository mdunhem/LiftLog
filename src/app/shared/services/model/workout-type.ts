import { FirebaseType } from './firebase-type';

export class WorkoutType implements FirebaseType {
    firebasePath: string = 'workoutTypes';
    $key: string = '';
    name: string = '';
    private _exerciseDefaults: Map<string, boolean>;

    constructor(firebaseAnyType: any = null) {
        console.log(firebaseAnyType);
        if (firebaseAnyType) {
            this.$key = firebaseAnyType.$key;
            if (firebaseAnyType.name) {
                this.name = firebaseAnyType.name;
            }
            this._exerciseDefaults = new Map<string, boolean>();
            if (firebaseAnyType.exerciseDefaults) {
                for (const key of Object.keys(firebaseAnyType.exerciseDefaults)) {
                    this._exerciseDefaults.set(key, firebaseAnyType.exerciseDefaults[key]);
                }
            }
        }
    }

    get exerciseDefaults(): string[] {
        const keys: string[] = [];
        this._exerciseDefaults.forEach((value: boolean, key: string) => keys.push(key));
        return keys;
    }

    set exerciseDefaults(newValue: string[]) {
        const exerciseDefaults: Map<string, boolean> = new Map<string, boolean>();
        newValue.forEach((value: string, index: number) => exerciseDefaults.set(value, true));
        this._exerciseDefaults = exerciseDefaults;
    }

    saveableValue(): { name: string, exerciseDefaults: Object } {
        const exerciseDefaults = {};
        this._exerciseDefaults.forEach((value: boolean, key: string) => {
            exerciseDefaults[key] = value;
        });
        return { name: this.name, exerciseDefaults: exerciseDefaults };
    }
}

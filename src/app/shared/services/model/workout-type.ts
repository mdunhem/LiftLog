import { FirebaseType } from './firebase-type';

export class WorkoutType implements FirebaseType {
    firebasePath: string = 'workoutTypes';
    $key: string;
    name: string;
    exerciseDefaults: Map<string, boolean>;

    constructor(firebaseAnyType: any = null) {
        if (firebaseAnyType) {
            this.$key = firebaseAnyType.$key;
            this.name = firebaseAnyType.name;
            this.exerciseDefaults = <Map<string, boolean>>firebaseAnyType.exerciseDefaults;
        }
    }

    get keys(): string[] {
        const keys: string[] = [];
        // console.log(this);
        // this.exerciseDefaults.forEach((value: boolean, key: string) => keys.push(key));
        for (const key of Object.keys(this.exerciseDefaults)) {
            console.log(key);
            keys.push(key);
        }
        return keys;
    }
    set keys(newKeys: string[]) {
        const exerciseDefaults: Map<string, boolean> = new Map<string, boolean>();
        newKeys.forEach((value: string, index: number) => exerciseDefaults.set(value, true));
        // for (const key of newKeys) {
        //     exerciseDefaults.set(key, true);
        // }
        this.exerciseDefaults = exerciseDefaults;
    }

    saveableValue(): { name: string, exerciseDefaults: Object } {
        const exerciseDefaults = {};
        this.exerciseDefaults.forEach((value: boolean, key: string) => {
            exerciseDefaults[key] = value;
        });
        return { name: this.name, exerciseDefaults: exerciseDefaults };
    }
}

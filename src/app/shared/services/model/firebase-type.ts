
export interface FirebaseType {
    firebasePath: string;
    $key: string;

    saveableValue(): any;
}

export interface FirebaseAnyType {
    $key: string;
    $exists: Function;
    [propName: string]: any;
}
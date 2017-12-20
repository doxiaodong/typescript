declare class Animal {
    a: number;
    b: number;
    protected c: number;
    private d;
}
declare const animal: Animal;
declare class Dog extends Animal {
    getName(): string;
}
declare class Animal2 {
    readonly a: number;
    setA(value: any): void;
}
declare abstract class Animal3 {
    abstract getUsername(): string;
}
declare class Animal4 extends Animal3 {
    getUsername(): string;
}
declare class Animal5 implements Animal3 {
    getUsername(): string;
}

declare const a: boolean;
declare const b: number;
declare const c: string;
declare const d1: Array<string>;
declare const d2: number[];
declare const e: [number, string];
declare enum Fruit {
    Apple = 0,
    Banana = 1,
    Orange = 2,
}
declare const f: Fruit;
declare let g: any;
declare function h(): void;
declare const i1: null;
declare const i2: undefined;
declare function infiniteLoop(): never;
declare type StringOrNumber = string | number;
declare let j: StringOrNumber;
declare type F1 = (a: string, b: string) => void;
declare type F2 = (a: number, b: number) => void;
declare const k: F1 & F2;

// public protected private
class Animal {
    constructor() {
        this.a = 1;
        this.b = 2;
        this.c = 3;
        this.d = 4;
    }
}
const animal = new Animal();
animal.a;
animal.b;
// animal.c
// animal.d
class Dog extends Animal {
    getName() {
        this.a;
        this.b;
        this.c;
        // this.d
        return 'wangwang';
    }
}
// readonly
class Animal2 {
    constructor() {
        this.a = 1;
    }
    setA(value) {
        // this.a = value
    }
}
// abstract
class Animal3 {
}
// new Animal3()
class Animal4 extends Animal3 {
    getUsername() {
        return 'dd';
    }
}
class Animal5 {
    getUsername() {
        return 'dd';
    }
}

// public protected private
class Animal {
  public a: number = 1
  b: number = 2
  protected c: number = 3
  private d: number = 4
}

const animal = new Animal()
animal.a
animal.b
// animal.c
// animal.d

class Dog extends Animal {
  getName() {
    this.a
    this.b
    this.c
    // this.d
    return 'wangwang'
  }
}

// readonly
class Animal2 {
  readonly a: number = 1

  setA(value) {
    // this.a = value
  }
}

// abstract
abstract class Animal3 {
  abstract getUsername(): string
}
// new Animal3()

class Animal4 extends Animal3 {
  getUsername() {
    return 'dd'
  }
}

class Animal5 implements Animal3 {
  getUsername() {
    return 'dd'
  }
}

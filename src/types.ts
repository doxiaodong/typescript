// Types: Boolean, Number, String, Array, Tuple, Enum, Any, Void, Null and Undefined, Never
// Boolean
const a: boolean = true

// Number
const b: number = 1

// String
const c: string = 'c'

// Array
const d1: Array<string> = ['d1', 'd2']
const d2: number[] = [1, 2]

// Tuple
const e: [number, string] = [1, 'e']

// Enum
enum Fruit {
  Apple,
  Banana,
  Orange
}
const f = Fruit.Apple

// Any
let g: any = {}
g = 1
g = null

// Void
function h(): void {
  console.log('void')
}

// Null and Undefined
const i1: null = null
const i2: undefined = undefined

// Never
function infiniteLoop(): never {
  while (true) {
  }
}

// Compose
type StringOrNumber = string | number
let j: StringOrNumber = 1
j = 'j'

type F1 = (a: string, b: string) => void
type F2 = (a: number, b: number) => void
const k: F1 & F2 = (a: string | number, b: string | number) => {}
k(1, 2)

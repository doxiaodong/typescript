// Types: Boolean, Number, String, Array, Tuple, Enum, Any, Void, Null and Undefined, Never
// Boolean
const a = true;
// Number
const b = 1;
// String
const c = 'c';
// Array
const d1 = ['d1', 'd2'];
const d2 = [1, 2];
// Tuple
const e = [1, 'e'];
// Enum
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
const f = Fruit.Apple;
// Any
let g = {};
g = 1;
g = null;
// Void
function h() {
    console.log('void');
}
// Null and Undefined
const i1 = null;
const i2 = undefined;
// Never
function infiniteLoop() {
    while (true) {
    }
}
let j = 1;
j = 'j';
const k = (a, b) => { };
k(1, 2);

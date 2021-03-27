const isDetching: boolean = true;
const isLosding: boolean = false;

const int: number = 42;
const float: number = 1.45;
const num: number = 3e10;

const message: string = 'hello';

const arr: number[] = [1, 2, 3, 4, 5, 6];
const numberArrey: Array<number> = [1, 2, 3, 4, 5, 6];

const words: string[] = ['hrllo', 'world'];

//Tuple
const contact: [string, number] = ['vladilen', 12345]

//Any
let variable:any = 42;
variable = 'new';
variable = [];

// ===

function sayMayName(name: string): void {
  console.log(name)
}
sayMayName('hbhbhhb');

//Never
function thowError(message: string): never {
  throw new Error(message);
}

function infinit(): never {
  while (true){
  }
}

//type
type Login = string;
const login1: Login = 'lego';
//const login2: Login = 2

type ID = string | number;
const id1: ID = 'hfhfh';
const id2: ID = 123;

type SomeType = string | null | undefined;

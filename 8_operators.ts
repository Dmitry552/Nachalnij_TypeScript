interface Person {
  name: string
  age: number
}
type PersonKeys = keyof Person;
let Myname: PersonKeys = 'name';
Myname = 'age';
//Myname = 'hello'

type User = {
  _id: number
  name: string
  email: string
  createAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createAt' >;
//type UserKeysNoMeta1 = Pick<User, 'name' | 'email'>;

let u1: UserKeysNoMeta = 'name';
//u1 = '_id'
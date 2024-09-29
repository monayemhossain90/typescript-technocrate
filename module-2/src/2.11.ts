
type Person = {
    name:string;
    age:number;
    email:string;
}

type ReadOnly = Readonly<Person>

type nameAge = Pick<Person, "name"|"age">

type email = Omit<Person, "name"|"age">

type PersonRequired = Required<Person>;

type PersonPartial = Partial<Person>


{
    

// generic type

// type GenericType = Array<number>
type GenericType<param> = Array<param>

// const rollNumbers:number[]=[1,2,3,4]
const rollNumbers:GenericType<number>=[1,2,3,4]

const persons:GenericType<string>=["abc",'cde']
const isAdmin:GenericType<boolean>=[true, false]

// type User = {
//     name:string;
//     age:number;
// }

interface User{
    name:string;
    age:number;
}

const user1: GenericType<User> = [
    {
        name:"ssss",
        age:32,
    },

    {
        name:"aaa",
        age:33,
    },

]


}
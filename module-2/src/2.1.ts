{


    // type Alias

type User1 = {
    name:string;
    age:number;
}

//  interface 

interface User2 {
    name:string;
    age:number;
}

type UserWithRole1 = User1 & {role:string}

interface UserWithRole2 extends User2{
    role:string;
}

const user:UserWithRole2 = {
    name:"",
    age:30,
    role:""
}



interface Roll {
    [index:number]:number
}

type Add1 = (num1:number, num2:number)=>number

interface Add2{
    (num1:number,num2:number):number
}


}

type Student = {
    name:string,
    roll:number,
    isAdmin:boolean,
}

const student1:Student= {
    name:"mm",
    roll:1,
    isAdmin:true,

}

type isAdmin = Boolean;
type name = String;


type Add =(num1:number,num2:number)=> number;
const add:Add = (num1, num2) => num1 + num2
{
type Vehicle = {
    bike:string;
    car:string;
    ship:string;
}

type Owner = "bike" | "car" | "ship";

type Owner2 = keyof Vehicle;

const person1:Owner2 ="bike"

const getPropertyValue = <X,Y extends keyof X> (obj:X,key:Y) =>{
    return obj[key]

}

const users = {
    name:"monayem",
    roll:1,
    age:30,
}

const result =  getPropertyValue(users, "roll")





}
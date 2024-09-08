// object --> function --> method

const poorUser = {
    name:"monayem",
    balance:0,
    addBalance(balance:number){
       return  this.balance + balance;

    }
}

const arr:number[] = [1,2,3,4];

const newArr:number[] = arr.map((element:number):number => element * element)
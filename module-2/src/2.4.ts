
interface Developer <T,X> {
    name:string;
    smartWatch: T;
    bike?:X
};

type T = {
    sleepTracking:boolean;
    hearTracking:boolean;
}

type X = {
    price: number;
    brand:string;
    
}

const user1:Developer<T,X> ={
    name:"AAA",
    smartWatch: {
        sleepTracking:true,
        hearTracking:true,
    },
    bike:{
        price: 10000,
    brand:"Yamaha"

    }
}

const user2:Developer<T,X> ={
    name:"AAA",
    smartWatch: {
        sleepTracking:true,
        hearTracking:true,
        
    },
    bike:{
    price: 10000,
    brand:"Yamaha"
    }


}


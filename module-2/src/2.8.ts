
{
//  load data from api
type Todo = {
    userId: number;
    id: number;
    title: string; 
    completed: boolean;

}

     const getData = async():Promise<Todo>=>{

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data)
        return data;
     }

     getData()
    //  create promise
    type Something = {something:string}

    const createPromise= ():Promise<Something>=>{

        return new Promise<Something>((resolve,reject)=>{
            const data:Something = {something:"this is something data"}
            if (data) {
                resolve(data)
                
            } else {
                reject("Failed to load data")

                
            } 
        })
    }

    const showData = async():Promise<Something>=>{

        const data:Something = await createPromise();
        return data
        // console.log(data)
    }


    showData();










}

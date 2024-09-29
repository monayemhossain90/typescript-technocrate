// // constrains
// const addStudent =<T extends {id:number,name:string,email:string}> (student:T)=>{
//     const course = "Next level web development";
//     return {
//         ...student,
//         course
//     }

// }

// const addStudent1 = addStudent({
//     id:1,
//     name:"aaa",
//     email:"abc@gmail.com"
// })


// constrains

const addStudent= <T extends{ id:number, name:string, email:string}>(student:T)=>{
    const course = "next level web development";

    return {
        ...student,
        course,
    }

}

const addStudent1 = addStudent({id:1, name:"aaa",email:"aaabc"})
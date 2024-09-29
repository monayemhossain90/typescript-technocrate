// function with generic

const createArray= <T>(params:T):T[]=>{
    return [params]
}


// function with tuple

const createTuple = <T,Q>(params1:T,params2:Q):[T,Q]=>{
    return [params1,params2]

}

const createTuple1 = createTuple("name",1)
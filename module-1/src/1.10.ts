
type FrontendDeveloper = {
    skills: string[];
    designation1:"Frontend Developer"
}

type BackendDeveloper = {
    skills: string[];
    designation2:"Backend Developer"
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper:FullStackDeveloper ={
    skills:["html","css","react"],
    designation2:"Backend Developer",
    designation1:"Frontend Developer"

}
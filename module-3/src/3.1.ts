class Animal  {
    // name:string;
    // species:string;
    // sound:string;

    constructor(public name:string, public species:string, public sound:string,){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

    // method in class

     animalSound(){
        console.log(`${this.name} sound is ${this.sound}`)

    }


}

const man = new Animal("monayem","man","ma ma");
const cat = new Animal("pussy","cat","meu meu");

console.log(cat.animalSound())
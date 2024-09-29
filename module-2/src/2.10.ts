{

type areaOfNumbers = {
    width:number;
    height:number;

}


type AreaString = {
    [key in keyof areaOfNumbers]:string

}


type height = areaOfNumbers













}
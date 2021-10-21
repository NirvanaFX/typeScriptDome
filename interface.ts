interface LabelledValue {
    label:string
}

function printLabel(labelledobj: LabelledValue){
    console.log(labelledobj.label)
}

let myObj = { label:"1888", size:4 }

printLabel(myObj)


interface Point {
    readonly x: number;
    readonly y:number;
}

let p1: Point = { x:10, y:20 }
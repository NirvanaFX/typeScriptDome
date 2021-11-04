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
// 只读属性无法赋值
// p1.x = 333

// ReadonlyArray<T>
// 只读数组不允许修改

let a: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = a
// ro.push(1)

// 可选属性
interface SquareConfig {
    color?: string;
    with?: number;
    [propName: string]: any; //预留不确定的其它参数的位置
}

function createSquare(config: SquareConfig): {color: string,with: number} {
    return
}


// 函数类型
interface SearchFunc{
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string){
    let result = source.search(subString);
    return result > 1;
}
// 不声明入参类型
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

// 可索引类型

interface StringArray{
    [index: number]:string
}

let myArray: StringArray;
myArray = ['sss','dddd'];
let myStr = myArray[0];

// 类类型

interface CloseInterFace {
    currentTime: Date;
    setTime(d: Date);
}

class Close implements CloseInterFace {
    currentTime: Date;
    setTime(d: Date){
        this.currentTime = d;
    }
    constructor(h: number, m: number){

    }
}

// 继承接口,可以同时继承多个接口

interface Shape {
    color: string;
}
interface PenStroke {
    sssWidth: number;
}
interface Square extends Shape,PenStroke {
    penWith: number;
}

let square = <Square>{};
square.color = "red";
square.penWith = 100;

// 混合类型
interface Counter {
    (start: number): string;
    interval: string,
    reset(): void;
}

function getCounter(): Counter{
    let counter = <Counter>function(start:number){};
    counter.interval = 'sss';
    counter.reset = function(){}
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = "100";

// 接口继承类
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// // 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     select() { }
// }

// class Location {

// }
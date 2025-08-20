


// let userName = prompt("enter your name")


// example 

// dom 

// let p = document.querySelector("p")
// p.innerText = userName
// alert()

// variable

// 1.var - global scope 
// 2.let - block scope 
// 3.const - block scope 

var a = 10 // declaration  //initizilation

a = 11 // reinitizialation

var a = "hello" // redeclration 
console.log(a)


// 2.let - block scope 
 
let b = 10 // declration //intizialiation

b = 12  // reinitizialation

// let b  // redeclration not acceptable

console.log(b);


// 3.const - block scope

const c = 10  // declration // intiazilation
// c=12  // reuse // reintiazilation not acceptable
// conct c not accept redeclration 
console.log(c);


// printing statement 

// 1.console.log( )
console.log("printing statement");

// 2. alert()
// alert("hello guys, how are you")

// 3. conform()

// confirm("hello world")

// 4.prompt()

// let a1 = prompt("enter your name")
// console.log(a1);


//5.document.writeln

// document.writeln("hello world")

// console method 

// console.log("123")

// console.error("123")

// console.warn("123")

// console.clear()


// js - data types 

// 1. primitive data type 
// 2.non-primitive data type 

// // 1.primitive datatype 

// 1.Number   - 12
// 2.string   - "123","abc"
// 3.boolean  - true , false
// 4.null     - 0
// 5.undefined - 0

// let num = 12

// console.log(typeof(num));

// let str = 'abc'

// console.log(typeof(str));

// let boolean = true

// console.log(typeof(boolean));

// let hp;

// console.log(hp);

// let nu = prompt()

// console.log(nu);








// 2.non-perimitive datatype 

//1.array
//2.object
//3.function
//4.date


//1.array

let arr = [1,2,3,4,5,6,7,8,9,10,20,30,"string",true,[1,2],{nam:"abc"}]

console.log(arr);
console.log(arr[5]);
console.log(arr[arr.length-1]);


//2.object

var obj = {
    Ename : "abc",
    Eage :22,
    Erole : "developer"
}


console.log(obj);
console.log(obj.Eage);



// operators  

// 1.arithmetic operators 
// 2.assignment operators .
// 3.relational or comparosion operator
// 4.logical operator

// 1. arithmetic operators

// meaning     operator

// 1. addition       +
// 2.subraction      -
// 3.multiplication  *
// 4.division        /
// 5.exponencial     **
// 6.modulus          %
// 7.increment operator ++
// 8. decrement operator --


console.log(1+2);
console.log(1-2);
console.log(1*2);
console.log(1/2);
console.log(1**2);
console.log(10%20);


// increment operator 1.post inc , 2.pre inc


let cal = 10
 ++cal

console.log(cal);

let call = 10
 
++call
++call
console.log(call);




let cal1 = 20 // cal2 = not avail, 20
let cal2 = ++cal1 // 20 ,21


console.log("cal1:",cal1,"cal2:",cal2);


let cal3 = 20 // no
let cal4 = cal3++ // no
let cal5 = ++cal4 //++20 =21
// cal3 -21  cal-4 - 21 cal5 -21
console.log(cal3,cal4,cal5);

// v cal3 - 21 cal4 - 20 cal5 - 21
// p cal3 - 21 cal4 - 20 cal5 - 19
// s  cal3 - 22 cal4 - 21 cal5 - 21
// a  cal3 -21 cal4 -20 cal5 -21
// pr cal3 - 21 cal4 -21 cal5 - 21
// m 3-21


let cal6 = 20 // no
let cal7 = cal6++ + cal6++ //21 + 20=41

// cal6++ + cal6 = 21 + 20 = 41

console.log(cal6,cal7);


//Assignment operator 


let random1 = 20
random1 = random1 + 20 // random1 += 20

console.log(random1);

let random2 = 50

random2 += 50

console.log(random2);


let random3 = 100
let randomVal = 20

random3 += randomVal

console.log(random3);
console.log(randomVal);


//relational operator and comparision operator

// operators           meaning           example        result

//    <              less then             5<2            false 

//    >              greater then          5>2            true 

//    <=             less then equal        5<=2           false

//     >=            greater then equal    5>=5            true

//     ==            loosy type equal       5==5           true

//     ===           strictly type equal    5==="5"        false

//     !=             loosy not equal        5!=5 ,5!=4   false,true

//     !==             strictly not equal    5!==5          false



console.log(5==5); // a- true
console.log(5>=5); // h - true
console.log(6<=5); // pr - true - false
console.log(5!=="5"); // pa - false - true[5!=="5"=true]
console.log(5==="5"); // sh - true - false
console.log(6=="6"); // see - true
console.log(6!="6"); // va - false 
console.log(8===8); // mo - true


// logical operator 


// 1. and    &&    true true = true   (5>2)&&(5<3) = false
// 2. or     ||     true false = true (5>2)||(5<3) = true 
// 3. not     !     true = false       !(5>3)= false

console.log(!(5===5)); // false
console.log(!(5!="5")||(5==="5")); // true
console.log(!(5!==5)); // true
console.log((5==6)||(5===5)); // true
console.log((6==="6")||!(6=="6")); // false
console.log((6>=7)||(6>8)); // false
console.log((78>=55)&&(98!="98")); // false
console.log((100==="1000")&&(100>0)); // false



console.log(!(5=="5"));

console.clear();

// function 

function one(a,b){
  console.log("this is named function");
  console.log(a+b);
  
}

one("abc",1000)


// function 3 types 

// 1. named function 
// 2. annonymous function
// 3. arrow function

// 1. namedfunction 

namedFun()
function namedFun(a1,b1){
    console.log("this named function");
}


//2.annonymous function

let annonymousfun = function(a1,b1){
    console.log("this annonymous fun");
}
annonymousfun()


//3.arrow function

let arrowFun = (a1,b1)=>{
    console.log("this arrow function");
    
    console.log(a1+b1);
}
arrowFun("super","man")


let person = {
    name1 : "john",
    age : 22
}


function one2(a1,b1){
  console.log(`the huge value is : ${b1}, the less val : ${a1}`);
  
}
one2(2000,3000)


let person2 = function(name,age){
    console.log(`the employee name is : ${name}, he age : ${age}`);
    
}
person2("kamal",22)


function defaultParam(length,brath=23){
    console.log(length*brath);
    
}
defaultParam(12,)


function form(name,age,email,disAbled="no"){
    console.log(name);
    console.log(age);
    console.log(email);
    console.log(disAbled);
    
}

form("abc",23,"liv@gmail.com")




let returnFun1 = (a,b)=>{
    console.log(a+b);  
}
returnFun1(10,20)

let returnFun = (a,b)=>{
    return a+b
}
let storeReturn = returnFun(10, 20);
console.log(storeReturn);

let add = 10 + storeReturn
console.log(add);


// scope 

var varVal = "global Scope"
console.log(varVal);

let letVal = "block scope"
console.log(letVal);

const constVal = "block scope"
console.log(constVal);




function scopes(){
    if(true){
        var functionVal = "global scope"
        let letFunction = "let block scope"
        const constfun = "const block scope"

        
        
    }
    // console.log(constfun);
    // console.log(letFunction);
    console.log(functionVal);
}
scopes()
let aa = 500
var bb = 600
const cc = 700

function accessGlobalScope(){
    let aa  =100
    var bb = 200
    var cc = 300

    if(true){
        
    } 
}

accessGlobalScope()
console.log(aa+bb+cc);

console.clear();


// higher order function and callback function 

function function1(){
    console.log(" i am a higher order function");
    
    
}

function function2(){
    console.log("i am a callback function");
    
}

function1(function2())


// function add1(a,b){
//     console.log(a+b);  
// }
// function sub1(a,b){
//     console.log(a-b);
// }

// add1(sub1(10,20))


function add1(callback,a,b){ // callback=sub1, a=20,b=50
    console.log(a+b);//a=20+//b=50 = 70
    callback(20,50) // callback = sub1(20,50)
}
function sub1(num1,num2){// num1=20,num2=50
    console.log(num1-num2);// 20-50=-30
}



// add1(20,30,40)
// sub1(20,20)

add1(sub1,20,50)

function mul(divide,add1,add2){//divide=val,add1 = 40,add2 = 40
    divide(30,30) // val(30,30)
    console.log(add1,add2);

}

function val(sub1,sub2){
    console.log(sub1-sub2);
    
}

mul(val,40,40)

function div(mul,b,a){
    console.log(a/b);
    mul(10,20)
    
}

let add2 = (a,b)=>{
    console.log(a+b); 
}

div(add2,30,30)

console.clear();


// 1.uncurrying function 


function add3(a,b,c){
    console.log(a+b+c);
}

add3(1,2,3)

// 2. currying function

function add4(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
            
        }
    }
}

add4(1)(2)(3)

// self invoke function(IIFE)

//(function(a,b){
// console.log("i am a self invoke "+a+b)
//})(12,3)

// (function(a,b){
//     alert("now disconunt going on "+Number(a+b)+"%")
// })(12,50)

//generator function


function*genFun(){
    yield "fourth price"
    yield "therid price"
    yield "first price"
    yield "fifth price"
    yield "sixth price"
    yield "fifth price"
}

let generator = genFun()

console.log(generator.next());


// dataStracture 

// array 

let flavour = ["vannila","butter Scotech","chocolate","any",true,Number,["choco"],{id:1}]
let flavour1 = [1,2,3,3,4]


console.log(flavour);
console.log(flavour[1]);
console.log(flavour[flavour.length-1]);


//1. multiple value store
//2. different dataTypes alse it can hold
//3. array is a homogeneous(same)
//4. array is a hetrogeneous(different)
//5.array is a flexible


// arr methods - manipulate

// 1.push() -- last add
// 2.pop()  -- last remove
// 3.unshift() -- first add
// 4.shift() -- first remove
// 5.splice() -- inbetween manipulation

// 1.push 

let model = [1,2,3,4]

model.push(5,6,7,8)
model.pop()
model.unshift(-1,0)
model.shift()
// model.splice(si,deleteCount,addingElement)
console.log(model);
model.splice(2,2,2,4,6,8,10)

console.log(model);


// array - merge method

// 1.concat()
// 2.slice()
// 3.fill()
// 4.flat()


// concat
let sample1 = [1,2,3,4]
let sample2 = [5,6,7,8]

let sample3 = sample1.concat(sample2)

console.log(sample3);

// slice

let sample4 = [1,2,3,4,5,"str","hello"]

let sample4Val = sample4.slice(1,3)


console.log(sample4Val);

// fill

let sample5 = [1,true,true,true,5,6]

// sample5.fill(true,si,ei)
sample5.fill(3,1,4)

console.log(sample5);


// flat 

let sample6 = [1,2,[3,4,[5,[[6,7,[8]]]]]]
console.log(sample6);


let sample6Val = sample6.flat(Infinity)

console.log(sample6Val);





let example = [1,2,[3,4,[5,6]]]

let example1 = example.flat(2).fill("javascript",2,4)


console.log(example1);


console.clear();


// sort

let random = [9,"a",5,7,411,3,"A",8,1,1239]

random.sort()
random.reverse()

console.log(random);

//reverse

let random11 = [5,2,3,1,10]

random11.reverse()

console.log(random11);



//includes


let random12 = [10,20,"b",30,40]
console.log(random12.includes("b"));

// join and tostring


let random13 = [1,2,3,4]
console.log(typeof(random13.join()));


let random14 = ["apple","guava","orange"]
console.log(random14.join());

//indexOf value --> indexNum result (l-r)

let random15 = [10,2,3,4,5,2,6,8,12,34,56,67,88]

console.log(random15.indexOf(2));


//lastIndexOf ---> (r-l)

console.log(random15.lastIndexOf(2,8));


// higher order method 


// 1. forEach() 

let fruit = ["apple","orange","banana","guava"]

fruit.forEach((c,i,tA)=>{
    console.log(c);
    console.log(i);  
    console.log(tA);
})

// 2.map()

let redFruit = ["apple","cherry","pomagranate"]

redFruit.map((Cele,ind,toAr)=>{
    console.log(Cele);
    console.log(ind);
    console.log(toAr); 
})

console.clear();


let green = ["one","two","three"]

let greenVal = green.forEach((a,b,c)=>{
    return a
})

console.log(greenVal);

let greenVal1 = green.map((a,b,c)=>{
    return a
})

console.log(greenVal1);


//3. filter

let emplyoee = [
    {empName : "a",empSalary : 10000},
    {empName : "b",empSalary : 20000},
    {empName : "c",empSalary : 30000},
    {empName : "d",empSalary : 40000},
    {empName : "e",empSalary : 50000},
]

let salaryDate = emplyoee.filter((a,b,c)=> a.empSalary >= 10000
)

console.log(salaryDate);

// find 


let SpecificPerson = emplyoee.find((a1,b1,toArr)=>a1.empSalary > 30000)

console.log(SpecificPerson);


//reduce

let reduceArr = [1,2,3,4,5] // 15
let sum = 0

for(let i = 0 ; i<reduceArr.length;i++){
    sum += reduceArr[i]
}

console.log(sum);


let finalVal = reduceArr.reduce((Acc,cele,index,total)=>{
    return Acc + cele //0 + 1 = 1 // 1 + 2 = 3// 3 + 3 = 6 // 6 + 4 = 10 // 10 + 5 = 15
},0)//

console.log(finalVal);



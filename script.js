


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

console.clear();

// Es6 Edition

// 1) spread operator

// it will use for (array and object)

// why ... [two arr or object we can take merge and clone]

// syntax -- arr - [...],  obj - {...}

let spr1 = [1,2,3,4]
let spr2 = [5,6,7,8]

let newspr = [...spr1,...spr2]

console.log(newspr);


//obj 

let sprObjperson1 ={
    id : "123Ab",
    eAge  : 23,
    eRole : "developer"
}
let sprObjperson2 ={
    id : "!@123",
    eAge  : 25,
    eRole : "developer"
}

let newObj = { ...sprObjperson1, ...sprObjperson2 };

console.log(newObj);




























// 2) rest operator

// it will use for (function)

//why...[multiple argument store in parameter]

// syntax -- function - (...)



function re(a,b,...c){
    console.log(a+b);
    console.log(c);
    
    
}

re(1,2,3,4,5,6,7,8)





// destructure

let abc = [10,20,30,40]

let abc1 = abc[1]

console.log(abc1);


// de


let [a1,a2,a3,a4] = abc

console.log(a1,a2,a3,a4);

let sumof = a1+a2

console.log(sumof);



let nested = [1,2,3,[4,5,[6]]]

let [b1,b2,b3,[b4,b5,[b6]]] = nested

console.log(b1,b2,b3,b4);















// higher order function

//sort

let ran = [1,2,121,23,3,6,4]
// 1,2,3,4,6,23,121

ran.sort()

console.log(ran);

let ranval = ran.sort((a,b)=>{
    return a-b
})

console.log(ranval);
let ranval1 = ran.sort((a,b)=>{
    return b-a
})

console.log(ranval1);



//some - like logical or

let some1 = [1,2,3,4,5]

let someVal = some1.some((cEle,ind,to)=>{
    return cEle%2==0 //1%2==0 = false,2%2==0 = true, 3 = false , 4 - true, 5- false
})

console.log(someVal);


//every - like logical and
let every1 = [2,4,6,8]
let someVal1 = every1.every((cEle,ind,toArr)=>{
    return cEle%2==0
})

console.log(someVal1);

console.clear();


// string methods 

let str = "  Hello world  "
//charAt()   index-->find Character

console.log(str.charAt(0));


//charCodeAt()   index --> ascii value

console.log(str.charCodeAt(0));


//includes()   availble value --> true oth - false

console.log(str.includes("H"));


//indexOf("findtheValue","fromIndex")  value --> findindex

console.log(str.indexOf("l"));

//lastIndexOf("findtheValue","fromIndex") 

console.log(str.lastIndexOf("l"));


//repeat --> repeat the string

console.log(str.repeat(2));


//replace("hello","javascript") --> replace the string

console.log(str.replace("Hello","javascript"));

//slice 

console.log(str.slice(6,11));


//split -- split the string to word

console.log(str.split("l"));

//startswith

console.log(str.startsWith("H"));

//endsWith

console.log(str.endsWith("d"));

//lowercase

console.log(str.toLowerCase());


//uppercase

console.log(str.toUpperCase());


// trim --> this method reduce gap for(front and back)


console.log(str.trim());

console.log(str.trimEnd());
console.log(str.trimStart());


//math objects 

// Math.abs()  n --> p

console.log(Math.abs(300));

// Math.sign()  -200 --> -1 , 3000 --> 1 , 0 = 0

console.log(Math.sign(340));


// Math.sqrt()  5^2 = 25, 25 = 5

console.log(Math.sqrt(25));

//Math.cbrt()  5^3 =125 , 125 =5 ,2^3 = 8

console.log(Math.cbrt(8));

//Math.pow(base,power) (2,3) = 2^3 = 8

console.log(Math.pow(2,3));

//Math.min

let b11 = [23,11,6,43]

console.log(Math.min(...b11));

//Math.max

console.log(Math.max(...b11));

//Math.random

let random21 = Math.random()*10

console.log(random21);


//math.trunc

console.log(Math.trunc(random21));

//math.ceil 4.01-->5

console.log(Math.ceil(random21));


//math.floor  4.9 --> 4

console.log(Math.floor(random21));

//math.round() 1.4 , 0<5 - 1, 5<=9 - 2 

console.log(Math.round(random21));


//date

let date =new Date

console.log(date);


// access the particular data 

//get


//getFullyear()

console.log(date.getFullYear());

//getmonth()

console.log(date.getMonth());

//getDate()

console.log(date.getDate());

//getDay()

console.log(date.getDay());

//getHours()

console.log(date.getHours());

//getMinutes()

console.log(date.getMinutes());

//getSeconds()

console.log(date.getSeconds());

//toDatestring()

console.log(date.toDateString());

//tolocalTimeString()

console.log(date.toLocaleTimeString());

//tolaclString()

console.log(date.toLocaleString());

console.clear();

// manipulate the Date Constracture inside the data's

//set

// let date1 = new Date

// // console.log(date1.setFullYear(year,month,date));
// console.log(date1);


// date1.setFullYear(2003,1,22)

// console.log(date1);

// date1.setMonth(5,23)

// console.log(date1);

// date1.setDate(30)
// console.log(date1);

// console.clear();


// // dob Day finder


// let day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

// let date2 = new Date

// console.log(date2);

// date2.setFullYear(2000,9,10)
// console.log(date2);
// console.log(date2.getDay());


// console.log(day[date2.getDay()]);









// setInterval(()=>{
//     let date3 = new Date();
//     console.log(date3.toLocaleTimeString());
 
// },1000)


// setTimeout(()=>{
//   let date3 = new Date();
//    console.log(date3.toLocaleTimeString());
// },2000) // async





console.clear(); // sync







// function one1(){
//     console.log("one");
    
// }

// function two1(){
//     console.log("two");
    
// }

// function three1(){
//     console.log("three");
    
// // }

// one1() // sy
// setTimeout(two1,0) // asy
// three1() //sy

// console.clear(); //sy










// // promise 


// // 3.states 

// // 1.resolve - get data
// // 2.reject -  error of data or not get
// // 3.pending - coming


// let PromiseData = new Promise((resolve,reject,pending)=>{
//     let dataReceived = true
//     if(dataReceived){
//         resolve("data received sucessfully")
//     }else{
//         reject(" data not received")
//     }
// })

// PromiseData
// .then((data)=>{
//     console.log(data);
    
// })
// .catch((error)=>{
//     console.error(error);  
// })



// // Api 


// fetch("https://fakestoreapi.com/products/")
// .then((sucessData)=>{
//     return sucessData.json()  
// })
// .then((jsData)=>{
//     console.log(jsData);
//     console.log(jsData.title);
//     jsData.forEach((cEle)=>{
//         console.log(cEle.title);
//     })
    
    
// })
// .catch((error)=>{
//     console.error(error.message);  
// })


// Dom - document object model

// 3techniques 

// 1.selecting technique



// 1.selecting technique 

let storeElement = document.getElementsByTagName("h1")

let storeClassElement = document.getElementsByClassName("one")

let storeIdElement = document.getElementById("two")

console.log(storeElement);
console.log(storeClassElement);
console.log(storeIdElement);






// // // Selecting Elements 

// // // 1.getElementByTagName - tag in Html
// // // 2. getElementByClassName - class name
// // // 3.getElementById - id 

// // // 4. quarySelector("input")
// // // 5. quarySelector(".one")
// // // 6. quarySelector("#two")

// // // 7. quarySelectorAll("")


// // let selectTag = document.getElementsByTagName("h1")

// // console.log(selectTag);

// // let ClassSelect = document.getElementsByClassName("one")

// // console.log(ClassSelect);

// // let idSelect = document.getElementById("two")

// // console.log(idSelect);



// // let qTag = document.querySelector("h3")

// // console.log(qTag);

// // let qClass = document.querySelector(".three")

// // console.log(qClass);

// // let qId = document.querySelector("#four")

// // console.log(qId);


// // let singleSelect = document.querySelector("h3")
// // let allSelect = document.querySelectorAll("h3")

// // console.log(singleSelect);
// // console.log(allSelect);

// // allSelect.forEach((c)=>{
// //   console.log(c);
// // })

// // console.clear();

// // // traversing techniques 

// // // 1.parent select method 

// // let child1 = document.querySelector(".child")
// // console.log(child1);

// // let parent = child1.parentElement



// // console.log(parent);


// // //2.child select method

// // let parent1 = document.querySelector(".parent")

// // console.log(parent1);
// // console.log(parent1.childElementCount);

// // console.log(parent1.children);

// // console.log(parent1.firstChild);
// // console.log(parent1.firstElementChild);

// // console.log(parent1.lastElementChild);


// // // text .parent >
// //       // text .child text
// //       // .child text
// //       // .child text
// //       // .child text 
// //      // /> text



// // // sibling select method

// // console.clear();

// // let childFirst = document.querySelector(".child")
// // console.log(childFirst.nextElementSibling);

// // let child2 = childFirst.nextElementSibling

// // let child3 = child2.nextElementSibling

// // console.log(child3);

// // // let difClass = document.querySelector(".child1")

// // // console.log(difClass);


// let storeAll = document.querySelectorAll(".menu")

// console.log(storeAll);

// storeAll.forEach((c)=>{
//   console.log(c.innerHTML);
  
// })

// let child1 = document.querySelector("#menu")

// console.log(child1.parentElement);


// let parent = document.querySelector("ul")
// console.log(parent.childElementCount);

// let childOne = document.querySelector("#menu")

// let child2 = childOne.nextElementSibling

// console.log(child2.previousElementSibling);

// console.clear();

// let li1 = document.querySelector("li")

// console.log(li1);

// let li1Val = li1.textContent

// let li2 = li1.nextElementSibling

// console.log(li2);

// li2.textContent = li1Val



// let spanAll = document.querySelectorAll("span")

// spanAll.forEach((a)=>{
//   console.log(a.innerText);
  
// })

// // manipulation

// // input tag inside value you want access mean --> value
// // remaining all tag inside you want access the value --> 1. testElement, 2. innerText,3.innerHTML


// //1.event Listner
// //2.event handler


// //1.create element
// //append --> one by one
// //prepend --> one before one
// //remove --> delete
// //eval --> (maths)
// //style


// select

let input = document.querySelector("input")
let button = document.querySelector("button")
let ol = document.querySelector("ol")


button.addEventListener("click",()=>{
  let storeInVal = input.value
  console.log(storeInVal);
let li = document.createElement("li")

li.style.color="green"

console.log(li);
li.textContent=storeInVal

ol.append(li)

console.log(ol);

li.addEventListener("click",()=>{
  li.remove()
})


  
})




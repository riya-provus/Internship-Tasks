
function SCOPECHECKING(){
    if(true){
        let name="riya"; 
        var name2="jadhav";
    }
    //console.log(name); // error (undefined)
    console.log(name2);  // accessible 
}
SCOPECHECKING();



        //map , reduce, filter
function mappingdata(){
    const arr=[1,2,3,4,5,6,7,8,9];
    const arr2=arr.map(n=>n*2)
    console.log(arr2);        
}
mappingdata();
function reducedata(){
    const arr=[1,2,3,4,5,6,7,8,9];
    const arr2=arr.reduce((acc,curr)=>acc+curr);
    console.log(arr2);        
}
reducedata();
function filterdata(){
    const arr=[1,2,3,4,5,6,7,8,9];
    const arr2=arr.filter((n)=>n%2==0);
    console.log(arr2);        
}
filterdata();


        //object immutability 
const obj={
    name:"riya",
    gender:"female",
}
console.log(obj.gender);
obj.name="varsha";
console.log(obj.name); //objects are mutable 
const obj2={...obj, dob:"18th march"}; 
console.log(obj2.gender , obj2.name , obj2.dob);


        //Referencing
const name={ gender:"female"}; // obj/array are copied by references
const name2=name;
console.log(name);
name2.gender="male";
console.log(name);
var num=2; // primitives are copied by value 
num2=num;
console.log(num);
num2=3;
console.log(num);


        // call back functions
function data(){
    console.log("hello");   
    setTimeout(()=>{
        console.log("u are asynchronous1");        
    },1000); 
    data2();
}
function data2(){
    setTimeout(()=>{
        console.log("u are asynchronous2");        
    },2000); 
    console.log("its data2");    
}
data();
console.log("hello u are outside");


    // higher order functions 
function higherorder(){
    const arr=[1,2,3,4,5,6,7,8,9];
    const arr2=arr.find( (n) => n%2!=0 );    //finds first odd number
    const arr3=arr.some( (n) => n%2==0 );   //returns true or false based on condition 
    const arr4=arr.every(n=>n>5);
    arr.forEach((n)=>console.log(n*2));  //not returns a new array
    console.log(arr2);    
}
higherorder();


    // function composition
function mul(n){
    return n*2;
}
function add(n){
    return n+2; 
}
function composing(one,two){
    return function(n){
        return one(two(n));
    } 
}
const composeddata=composing(mul,add)(2);
console.log(composeddata);


//Example of students record
const students = [
    {
        name:"Riya",
        age:21,
        gender:"Female",
    },
    {
        name:"Raj",
        age:16,
        gender:"male",
    },
    {
        name:"Varsha",
        age:18,
        gender:"Female",
    }
]
console.log("Students Data");
console.log(students);

function mappingdata(){
    const newarray=students.map((student)=>
        student.name
    )
    console.log(newarray);    
}
console.log("Getting names of all students");
mappingdata()

function filteringdata(){
    const agelimit=students.filter((student)=>
        student.age<18
    )
    console.log(agelimit);    
} 
console.log("Students with age below 18");
filteringdata();

function reducedata(){
    const sumofages=students.reduce((acc,curr)=>
        acc+curr.age,0
    ) 
    console.log(sumofages);    
}
console.log("Sum of ages of all students is : ");
reducedata();

const newstudents=[
    {
        name:"EMP1",
        age:22,
        gender:"female"
    },
    {
        name:"EMP2",
        age:11,
        gender:"male"
    },
]
console.log("New students needs to be added : (list of students) ");
console.log(newstudents);

const updatedlist=[...students,...newstudents];
console.log("Updated final list is : ");
console.log(updatedlist);



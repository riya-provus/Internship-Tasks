//prototype 
function data1(name){
    this.name=name;
    this.getinfo=function(name){
        return this.name+"you are inside";
    }
}
data1.prototype.age=22;
data1.prototype.getinfo=function(name){
    return "hello i am "+this.name;
}
const obj1=new data1("Riya");
const obj2=new data1("Janhvi");
console.log(obj1.getinfo());
console.log(obj2.name);
console.log(Object.getOwnPropertyNames(data1.prototype));


//destructuring
const fun={
    name:"Riya",
    age:22,
    gender:"female"
}
const {name:empname="Janhvi",age,gender}=fun;
console.log(empname);


//spread operator 
let arr=[1,2,3,4,5];
console.log(arr);
let arr2=[11,22,33,44,55,66]
let newmergedarr=[...arr,123,236,...arr2];


//Inheritance using prototype
function old(){
    this.name="Riya";
    this.age=22;
}
old.prototype.getinfo=function(name){
    return `Hello i am ${name}`;
}
function newone(){
    old.call(this);
}
newone.prototype=Object.create(old.prototype);
const oldobj=new old();
const newobj=new newone();
console.log(oldobj.getinfo("Ria"));
console.log(newobj.getinfo("Janhvi"));
console.log(newobj.age);


const oldone={
    name:"Riya",
    age:22,
    getinfo(name){
        return `Hello i am ${name}`;
    }
}
const newone=Object.create(oldone);
console.log(oldone.getinfo("Ria"));
console.log(newone.getinfo("Janhvi"));
console.log(newone.age);

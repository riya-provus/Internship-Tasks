// //Generics in functions
// function getinfo<T>(arg:T):T{
//     return arg
// }
// console.log(getinfo<number>(22));


// //Generics using interface
// interface data<T,U>{
//     id:T,
//     name:U
// }
// let member1:data<number,string>={
//     id:22,
//     name:"riya"
// }
// console.log(member1);


// //Generics with array
// function arrayinfo<T> (arr:T[]) : T{
//     return arr[2];
// } 
// console.log(arrayinfo<number>([1,2,3]));


// //Generic using Multiple Parameters
// function multipledata<T,U>(first:T,second:U) : [T,U]{
//     return [first,second];    
// }
// console.log(multipledata<number,number>(1,2));


// //Generic Class
// class blueprint<T>{
//     value:T;
//     constructor(val:T){
//         this.value=val;
//     }

//     getdata():T{
//         return this.value;
//     }
// }
// const obj=new blueprint<number>(12);
// console.log(obj.getdata());


// //classes and objects
// class data{
//     value:string;
//     id:number;

//     constructor(val:string,id:number){
//         this.value=val;
//         this.id=id;
//     }

//     getdata():string{
//         return this.value;
//     }
// }
// const obj=new data("riya",5);
// const ans=obj.getdata();
// console.log(ans);

// //Access modifiers
// class data{
//     public value:string;
//     private id:number;

//     constructor(val:string,id:number){
//         this.value=val;
//         this.id=id;
//     }

//     getname():string{
//         return this.value;
//     }
//     getid():number{
//         return this.id;
//     }
// }
// const obj=new data("riya",5);
// console.log(obj.value);
// console.log(obj.getname());
// console.log(obj.getid());
// // console.log(obj.id);  //private members not accessed directly



// //Inheritance using access modifiers  (public,private,protected)
// class Animal {
//     public val:string="riya";
//     private id:number=22;
//     protected age:number=12;
//     speak() {
//         console.log("Inside parent class");
//         console.log(this.id);    
//         console.log(this.val);   
//         console.log(this.age);        
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log("Inside child class");
//         console.log(this.val);    
//         console.log(this.age);        
//     }
// }
// const d = new Dog();
// d.speak(); 
// d.bark();  



// //Method Overriding (RunTime checking)
// //method executtion relies on actual object and not on the type of object
// class Payment {
//     process(): void {
//         console.log("Processing payment");
//     }
// }
// class CreditCardPayment extends Payment {
//     process(): void {
//         console.log("Processing credit card payment");
//     }
// }
// class UPIPayment extends Payment {
//     process(): void {
//         console.log("Processing UPI payment");
//     }
// }
// function makePayment(payment: Payment) {
//     payment.process();
// }
// makePayment(new CreditCardPayment());
// makePayment(new UPIPayment());



// //super keyword
// class Animal {
//     val:string;
//     id:number;
//     constructor(val:string,id:number){
//         this.val=val;
//         this.id=id;
//     }
// }
// class Dog extends Animal {
//     age:number;
//     constructor(val:string,id:number,age:number){   
//         super(val,id);
//         this.age=age;
//     }    
// }
// const d = new Dog("goofy",1,22);
// console.log(d.age);
// console.log(d.id);
// console.log(d.val);



// //Type assertion
// //1.Angle bracket
// const data="Riya";
// const ans=(<string>data).length;
// console.log(ans);
// //2.as keyword
// const data="Riya";
// const ans=(data as string).length;
// console.log(ans);



// //Type Guards
// //1.typeof
// const data:string="Riya";
// if(typeof data=="string"){
//     console.log(data.toLowerCase());    
// }
// //2.instanceof
// class Dog {
//   bark() {
//     console.log("Barks");    
//   }
// }
// class Cat {
//   meow() {
//     console.log("Meows");    
//   }
// }
// function makeSound(animal: Dog | Cat) {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }
// makeSound(new Cat());


// //Generics helps in api response
// interface User{
//     id:number;
//     name:string;
//     email:string;
// }
// async function fetchData<T>(apikey:string):Promise<T>{
//     const data=await fetch(apikey);
//     const answer=await data.json();
//     return answer;
// }
// async function main() {
//     const received= await fetchData<User[]>("https://jsonplaceholder.typicode.com/users");
//     received.map((al)=>{
//         console.log(al.email , al.id , al.name);        
//     })
// }
// main();



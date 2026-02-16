// //interface usage
// interface Author{
//     name:string,
//     position:string
// }
// const newAuthor:Author={
//     name:"Riya",
//     position:"IT Engineer"
// }
// interface Post{
//     post_id:number,
//     post_data:string,
//     post_time:string,
//     author:Author
// }
// const newPost:Post={
//     post_id:1,
//     post_data:"Hello All",
//     post_time:"Morning",
//     author:newAuthor
// }
// function data(post:Post):any{
//     console.log(post);    
// }
// data(newPost);



// //interface using inheritance
// interface Author{
//     name:string,
//     position:string
// }
// const newAuthor:Author={
//     name:"Riya",
//     position:"IT Engineer"
// }
// interface Post extends Author{
//     post_id:number,
//     post_data:string,
//     post_time:string
// }
// const newPost:Post={
//     post_id:1,
//     post_data:"Hello All",
//     post_time:"Morning",
//     name:newAuthor.name,
//     position:newAuthor.position
// }
// function data(post:Post):any{
//     console.log(post);    
// }
// data(newPost);


// //type omit partial pick
// type data={
//     name:string,
//     age:number,
//     gender:string,
//     position:string
// }
// type authority=Omit<data,"position">;
// const member1:authority={
//     name:"riya",
//     age:22,
//     gender:"female"
// }
// console.log(member1);
// type allAllowed=Partial<data>;
// const member2:allAllowed={
//     name:"Gennie"
// }
// console.log(member2.age);
// type selective=Pick<data,"name"|"age">;
// const member3:selective={
//     name:"Riya",
//     age:22
// } 
// console.log(member3);

// //Required readonly record
// type data={
//     name:string,
//     age?:number
// }
// type allRequired=Required<data>
// const member1:allRequired={
//     name:"riya",
//     age:22
// }
// console.log(member1);
// type roles="admin"|"user";
// type User={
//     name :string,
//     age:number,
//     roles:roles
// }
// type access=Readonly<Record<User["roles"],boolean>>
// const confidentialInfo:access={
//     admin:true,
//     user:false
// }
// console.log(confidentialInfo.admin);
// confidentialInfo.admin="false"; //error as it is readonly
// type record=Record<User["roles"],boolean>
// const detail:record={
//     admin:true,
//     user:false
// }
// const member:User={
//     name:"riya",
//     age:22,
//     roles:"user"
// }
// if(detail[member.roles]){
//     console.log("hello");    
// }
// else{
//     console.log("not allowed");    
// }


// //enums
// enum Role{
//     Admin="admin",
//     User="user"
// }
// type access=Record<Role,boolean>;
// const data: access = {
//     [Role.Admin]: true,
//     [Role.User]: false
// };

// const userinfo="admin";
// if(data[userinfo]){
//     console.log("hello");    
// }


// //Fetching API
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
// async function fetchUsers():Promise<User[]>{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data: User[] = await response.json();
//         return data;
// }

// async function dataReceived(){
//     const data=await fetchUsers();
//     data.map((al)=>{
//         console.log(al.id, al.name, al.email);
//     });    
// }
// dataReceived();



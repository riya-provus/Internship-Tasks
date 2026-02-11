"use strict";
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
async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}
async function dataReceived() {
    const data = await fetchUsers();
    data.map((al) => {
        console.log(al.id, al.name, al.email);
    });
    // console.log(data);    
}
dataReceived();
// async function delayedLog() {
//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       console.log("Hello after 1 second");
//       resolve();
//     }, 1000);
//   });
// }
// async function main() {
//   await delayedLog();
//   console.log("Done");
// }
// main();

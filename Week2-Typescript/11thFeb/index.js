"use strict";
// //Generics in functions
// function getinfo<T>(arg:T):T{
//     return arg
// }
// console.log(getinfo<number>(22));
async function fetchData(apikey) {
    const data = await fetch(apikey);
    const answer = await data.json();
    return answer;
}
async function main() {
    const received = await fetchData("https://jsonplaceholder.typicode.com/users");
    received.map((al) => {
        console.log(al.email, al.id, al.name);
    });
}
main();

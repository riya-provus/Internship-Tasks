console.log("Hello");

//static typing with union types
let data:string="riya";
console.log(data);
let arr:number[]=[1,2,3,4,5];
console.log(arr);
let info:number|string|null=78;
console.log(typeof arr);
 

//Dynamic typing with union types
let data_d="riya";
console.log(data);
let arr_d=[1,2,3,4,5];
console.log(arr);
let info_d=undefined;
console.log(typeof info_d);

//typeof always follows javascript rules at the runtime so it is not impacted by static typing 
   
//Conditional chaining
let obj:{age:number,name:string,roll_no?:number};
obj={
    age:23,
    name:"riya",
}
console.log(obj);


//index signature (for any unexpected parameter at the time of API fetching)
let obj1:{
    age:number;
    name:string;
    roll_no?:number;
    [key:string]:unknown
};
obj1={
    age:23,
    name:"riya",
}
obj1.gender="female";
console.log(obj1?.gender);

//(Complex types)non primitives(object,tuples,arrays,interfaces)
let arr2: number[] = [1, 2];
arr2.push(3);    
let tup: [string, number,null] = ["Riya", 23,null];
tup.push();    
console.log(arr2);
console.log(tup);


//any , unknown 
let information:any="riya";
console.log(information);
let information1:unknown="riya";
if(typeof information1 =="string"){
    console.log(information1.toLowerCase());
}


//void and never 
// function getinfo():void{
//     console.log("Hello void");    
// }
// console.log(getinfo());     //returns undefined
// console.log("Outside Void");//always reached
// function getinfo2():never{
//     throw new Error("Inside never");
// }
// console.log(getinfo2());   //returns nothing
// console.log("Outside Never");//never reached


//mapping dynamic data to structured
// TypeScript code for fetching API and converting to structured JSON

// Define interface for the API response
interface APIUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        city: string;
        zipcode: string;
    };
}

// Define interface for structured data
interface StructuredUser {
    name: string;
    email: string;
    city: string;
}

// Async function to fetch and structure data
async function fetchAndStructureData(): Promise<void> {
    try {
        // Fetch data from API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const unstructuredData: APIUser[] = await response.json(); // Type assertion

        // Map dynamic data to structured data
        const structuredData: StructuredUser[] = unstructuredData.map(user => ({
            name: user.name,
            email: user.email,
            city: user.address.city
        }));

        // Print structured data
        console.log("Structured Data:");
        structuredData.forEach(user => {
            console.log(`${user.name} lives in ${user.city} and can be contacted at ${user.email}`);
        });

    } catch (error) {
        console.error("Error fetching or processing API data:", error);
    }
}

// Call the function
fetchAndStructureData();

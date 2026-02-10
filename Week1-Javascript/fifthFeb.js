console.log("Promises");

const { log } = require("console");
const data=new Promise ((resolve,reject)=>{
    const status="Active";
    if(status=="Active"){
        resolve();
        console.log("promise is resolved");
    }
    else{
        reject();
        console.log("Promise is rejected");        
    }
})

async function getdata(){
    console.log();
    
    const info=await fetch("https://api.weatherapi.com/v1/current.json?key=446a1e1a882d44c9b2951825260502&q=Pune");
    try{
        const data=await info.json();
        return data;
    }catch(err){
        console.log("Error is fetching the data"+err);        
    }
}
getdata().then((data)=>{
    console.log("In "+data.location.name+" The atmosphere will be "+data.current.condition.text);    
}).finally(()=>{
    console.log("End of the code");    
})



const readline=require("readline");
const r1=readline.createInterface({
    input : process.stdin,
    output:process.stdout    
})
r1.question("Enter the name of city ",async function(city){
    try{
        const info=await fetch(`https://api.weatherapi.com/v1/current.json?key=446a1e1a882d44c9b2951825260502&q=${city}`);
        const finaldata=await info.json();
        console.log(finaldata);        
    }catch(err){
        console.log("Failed to fetch data due to "+err);        
    }
    r1.close();
})



async function data(){
    return new Promise((resolve,reject)=>{
        r1.question("Enter the city  name",async function(city){
            try{
                const info=await fetch(`https://api.weatherapi.com/v1/current.json?key=446a1e1a882d44c9b2951825260502&q=${city}`);
                const finaldata=await info.json();
                resolve(finaldata);
            }catch(err){
                reject(err);
            }
            r1.close();
        })        
    })
}
async function main(){
    const APIinfo=await data();
    console.log(APIinfo);    
}
main();

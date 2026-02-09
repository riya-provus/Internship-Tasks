console.log("Hello");
//static typing with union types
var data = "riya";
console.log(data);
var arr = [1, 2, 3, 4, 5];
console.log(arr);
var info = 78;
console.log(typeof arr);
//Dynamic typing with union types
var data_d = "riya";
console.log(data);
var arr_d = [1, 2, 3, 4, 5];
console.log(arr);
var info_d = undefined;
console.log(typeof info_d);
//typeof always follows javascript rules at the runtime so it is not impacted by static typing 
//Conditional chaining
var obj;
obj = {
    age: 23,
    name: "riya",
};
console.log(obj);
//index signature (for any unexpected parameter at the time of API fetching)
var obj1;
obj1 = {
    age: 23,
    name: "riya",
};
obj1.gender = "female";
console.log(obj1 === null || obj1 === void 0 ? void 0 : obj1.gender);
//(Complex types)non primitives(object,tuples,arrays,interfaces)
var arr2 = [1, 2];
arr2.push(3);
var tup = ["Riya", 23, null];
tup.push();
console.log(arr2);
console.log(tup);
//any , unknown 
var information = "riya";
console.log(information);
var information1 = "riya";
if (typeof information1 == "string") {
    console.log(information1.toLowerCase());
}
//void and never 
function getinfo() {
    console.log("Hello void");
}
console.log(getinfo()); //returns undefined
console.log("Outside Void"); //always reached
function getinfo2() {
    throw new Error("Inside never");
}
console.log(getinfo2()); //returns nothing
console.log("Outside Never"); //never reached

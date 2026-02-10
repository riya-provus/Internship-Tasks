
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
// Async function to fetch and structure data
function fetchAndStructureData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, unstructuredData, structuredData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    unstructuredData = _a.sent();
                    structuredData = unstructuredData.map(function (user) { return ({
                        name: user.name,
                        email: user.email,
                        city: user.address.city
                    }); });
                    // Print structured data
                    console.log("Structured Data:");
                    structuredData.forEach(function (user) {
                        console.log("".concat(user.name, " lives in ").concat(user.city, " and can be contacted at ").concat(user.email));
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching or processing API data:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Call the function
fetchAndStructureData();

console.log("hello everyone")
var ti;
console.log(ti);
console.error("error")
console.warn("warning")
console.log(true)
console.log(false)
console.log(9876778774864765678657683644446448927890);
console.log(1.23e+75);
//array--> non primitive data type
var arr1=["hi","hello"]
var arr2 = ["hello","day",14,"world",2.8];
console.log(arr2);
//indexing an array starts with 0 
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4]);
console.log(arr2[5]);

//objecs--> non primitive data type [similar to dictonary in python]
var obj ={
    name: "we are devs",
    age: 1000,
    bol: true,
    arr:["hello",5,2,"bye"],
    "good_dev":"Yes, I am"//good_dev is also acceptable without semicolons
}
console.log(obj.arr)
console.log(obj);
console.log(obj.name);
// console.log(obj."good_dev")
console.log(obj["good_dev"]);
console.log(obj.good_dev);
console.log(obj.arr[3]);

//variable--> the value can change any time
var variable_name="java script";
console.log(variable_name);

// string methods
var vari = "hello java script , you are good";
console.log(vari)
console.log(vari.toUpperCase());
console.log(vari.toLowerCase());
console.log(vari.slice(0,4));
console.log(vari.replace("ja","js"));
//console.log(var)
console.log(vari.includes("java script"));
var newstring = "1234"
console.log(newstring);
console.log(parseInt(newstring));//convert into int
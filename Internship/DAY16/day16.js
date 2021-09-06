// //functions
// function showstring(){
//     console.log("this is function");
// }
// //predefined built-in functions
// // .push
// // .unshift
// // .pop
// // .shift
// // .join("-")-->by using seperator
// // .indexOf("")
// // .sort()
// // .reverse()
// console.log("Hello srivatsa")

// var age = [1,2,3,4,5];
// var f=age.find(myfunc);
// function myfunc(value,index, array){
//     return value>4;
// }
// console.log(f);
// //for each function--> means for each element inside the array

// age.forEach ( function (e) { // we should not have to define e because it is inbuilt
//     console.log(e+5)   // we can also replace the e with any other var
// });

// for (var e of age ) {  // here of means whatever the content available in the array is applicable to e
//  console.log(e);
// }

// var obj = { 65:"A", 66:"B", 67:"C",68:"D", 69:"E", 70:"F",71:"G", 72:"H", 73:"I" };
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// var objk = {
//     pr1 : 42
// };
// console.log(objk.hasOwnProperty("pr1"));// here we can check the keys only if they are present or not, not the values.
// console.log(objk.hasOwnProperty("pr2"));


var obje ={
    name :"js"
};
var freezedObj = Object.freeze(obje);
console.log(freezedObj);
console.log("check",freezedObj == obje);
console.log(Object.isFrozen(obje));


var obj={ 65 : "A", 66 : "B", 67 : "C", 68 : "D"};
obj.foo = "bar1";
console.log(obj.foo);
obj.new_foo = "bar2";
console.log(obj.new_foo);
console.log(obj);
//x===y;-->this will check the data type also should same
//x!==y;--> this willalso checks the data type

console.log("class 15");
/*multiline comment*/
console.log(true && false)//logical and
console.log(true || false)//logical or
console.log(!true) //logical not


//if c
var x=20;
var y="20";
if (x===y){
    console.log("this is true")
} else if(x>=y){
    console.log(typeof x)
    console.log(typeof y)
    console.log("first is false, I am true")
} else{
    console.log(typeof x)
    console.log(typeof y)
    console.log("this is false")
}





console.log("switch case")
var n1=50;
var n2=20;
var oper ='-';
switch(oper){
    case "+":
        console.log(n1+n2);
        break;
    case "-":
        console.log(n1-n2);
        break;
    default:
        console.log("neither of them")
}




//for loop
var sum=0;
var start=1;
var final=3;
 for (var i=start; i<=final; i++){
     sum=sum+i;
 }
 console.log(sum)

//while loop
var sum=0;
var start=1;
var final=3;
var i=start;
while(i<=final){
    sum=sum+i;
    i++;
}
console.log("while sum = ",sum);
 

//do while loop
var sum=0;
var start=1;
var final=3;
var i=start;
do{
    sum=sum+i;
    i++;
} while(i<=final);
console.log("do-while sum = ",sum);
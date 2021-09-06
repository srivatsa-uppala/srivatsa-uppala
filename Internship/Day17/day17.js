var imvar = "hello var";
let imlet = "hello let";
var message = "global scope";
function greet(){
    var message1="local variable";
    console.log(message1);
}
greet();
console.log(message);
greet();


let nu = 10;
console.log(nu);
if ( nu == 10 ) {
    let nu=20;
    console.log(nu);
}
console.log(nu);
if (nu == 10){
    let nu=30;
    console.log(nu)
}
console.log(nu)
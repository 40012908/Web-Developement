
/*var sum = function(n1,n2,n3){
    return (n1+n2+n3);
}
console.log(sum(10,20,30))
*/
//IIFE-immediately invoke function expression
(function greet(name){
    console.log('hello '+name);
})('Pavan')
/*
(function sum(n1,n2,n3){
    console.log(sum(n1,n2,n3));
})sum(10,20,30)
*/
var total = (function(n1,n2,n3){
    return n1+n2+n3
})(10,20,30)
console.log(total)
/*
function avgofnum(x,y){
    var sum = function(){
        return x+y;
    }
    return sum()/2;
}
var result = avgofnum(10,20);
console.log(result);
*/
var res = (function(x,y){ //returning a function
    return function(){
        return x+y;
    }
})(10,20)();
console.log(res/2);
//var result = avgofnum(15,20);
//console.log(avgofnum(15,20)()/2);
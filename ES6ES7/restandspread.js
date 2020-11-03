/*
function sumofnum(a,b){
    return(a+b)
}
console.log(sumofnum(10,40))

var sum=function(a,b,c){
    return a+b+c;
}
console.log(sum(10,40,50))
*/
// var sumofNums = function(...arguments){
//     var  sum =0;
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i];
//     }
//     console.log(sum);
// }
fun =function(a,b,...arguments){
    console.log("a",a);
    console.log("b",b);
    console.log("arguments",arguments);
}
fun(1,2,"hello",900);
fun(1);
fun(1,2);
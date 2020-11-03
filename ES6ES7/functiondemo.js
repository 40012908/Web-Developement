function showfinalCost(numofitems){
    return function calculate (cost_per_unit){

        if(numofitems>100){
            return numofitems*(cost_per_unit)*0.8;
        } else   { return numofitems*cost_per_unit; }      
    }
}
var total = showfinalCost(200);
console.log(total(20));


var fun = (a,b=10)=>console.log(a+b);
fun();
fun(500);
fun(30,20);
function addNumbers(...nums:number[]){
    var sum =0;
    for(var i =0; i<nums.length;i++){
        sum+=nums[i];
    }
    console.log(sum);
}
addNumbers();
addNumbers(10,20);
addNumbers(10,20,30);
addNumbers(10,20,30,40);

function userDetails (name:string,city:string="Bangalore"){
    console.log('name'+name);
    console.log('city'+city);
}
userDetails('Raju');
userDetails('Raju','ooty');

var greet = function(msg:string){
    return msg;
}
console.log(greet('Have a great day'));

greet = (msg:string)=>{
    return 'Welcome '+msg;
}
console.log(greet('Hello'));

var checktype = (a,b) =>{
    console.log(a+b);
}
var show =()=>console.log("hi");
console.log(show());
checktype(10,20);
checktype(10,'Ram');
checktype('Ram ','sham');
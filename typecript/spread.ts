//spread operator ...arrname 
var myarr = [1,2,3,4,5,6]; 
var new_arr = [...myarr,7,8,9]; 
for(var i of new_arr){ console.log(i); } 
var student ={name:'Kumaran',age:20} 
var details1 ={mobile:987890,city:'Bangalore',state:'KAR'} 
var newstudent={...student,...details1}; 
var newemployee={...student,...details1,salary:1000}; 
console.log(newemployee) 
for(var j in newstudent)
    { console.log(j,newstudent[j]); }
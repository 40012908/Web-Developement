var Employee = function(){}
Employee.prototype.name='Praveen';
Employee.prototype.printName=function(){
    console.log('Welcome '+this.name);
};
emp1 = new Employee('Ram');
emp1.printName();
console.log(this.emp1);
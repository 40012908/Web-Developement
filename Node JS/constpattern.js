var Student =   function(name,city,gender){
    this.name=name;
    this.city=city;
    this.gender=gender;
    this.getDetails=function(){
        console.log(this.name,this.city,this.gender);
    }
}

student = new Student('Pavan Raj','Bangalore','Male');
console.log(student.name,student.city,student.gender);
student.getDetails();

Student.prototype.age=22;
Student.prototype.greet=function(message)
{
    console.log(message,this.name);
}
console.log(student.age);
student.greet('welcome');

student1= new Student('Pooja','Mumbai','Female');
student1.age=21;
student1.greet('Good Day');
console.log(student1.name,student1.age,student1.city,student1.gender);


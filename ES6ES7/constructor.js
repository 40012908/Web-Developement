/*class Person{ 
    constructor(name,city)
    { this.city =city; 
    this.name = name; }

getName(){ return this.name; } 

setName(name){ this.name = name; } 
} 

var person = new Person(); 
person.setName('Marley'); 
console.log(person.getName());
*/
/*
class Person{
    constructor(name,city){
        this.city=city;
        this.name=name;
    }
    get firstname(){
        return this.firstname.toUpperCase();
    }
    set firstname(name){
        this.name=name;
    }
    

}
var person = new Person;
console.log(person.firstname());
person.firstname('Marley'); 
console.log(person.firstname());
*/
class Vehicles{
    constructor(brand,price){
        this.brand=brand;
        this.price=price;
    }
    set details(discount){
        this.brand = this.brand.toUpperCase();
        this.price = this.price-discount;
    }
    get details(){
        return this.brand+" "+this.price;
    }
}

var veh = new Vehicles('Maruti',200000);
console.log(veh);
veh.details=10000;
console.log(veh.details);
console.log(veh.brand);
console.log(veh.price);
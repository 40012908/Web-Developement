"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var Vehicles =
/*#__PURE__*/
function () {
  function Vehicles(brand, price) {
    _classCallCheck(this, Vehicles);

    this.brand = brand;
    this.price = price;
  }

  _createClass(Vehicles, [{
    key: "details",
    set: function set(discount) {
      this.brand = this.brand.toUpperCase();
      this.price = this.price - discount;
    },
    get: function get() {
      return this.brand + " " + this.price;
    }
  }]);

  return Vehicles;
}();

var veh = new Vehicles('Maruti', 200000);
console.log(veh);
veh.details = 10000;
console.log(veh.details);
console.log(veh.brand);
console.log(veh.price);
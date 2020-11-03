"use strict";

var Mobile = [{
  name: 'young',
  brand: 'Samsung',
  price: 8000,
  Accessories: ['charger', 'Shield']
}, {
  name: 'Realme C2',
  brand: 'Realme',
  price: 6000,
  Accessories: ['charger', 'Shield', 'warranty']
}, {
  name: 'iphone11',
  brand: 'iphone',
  price: 60000,
  Accessories: ['charger', 'Shield', 'warranty', 'headphone']
}];

for (var i in Mobile) {
  var mob = Mobile[i];
  console.log(Mobile.price);
}
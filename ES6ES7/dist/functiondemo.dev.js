"use strict";

function showfinalCost(numofitems) {
  return function calculate(cost_per_unit) {
    if (numofitems > 100) {
      return numofitems * cost_per_unit * 0.8;
    } else {
      return numofitems * cost_per_unit;
    }
  };
}

var total = showfinalCost(200);
console.log(total(20));

var fun = function fun(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return console.log(a + b);
};

fun();
fun(500);
fun(30, 20);
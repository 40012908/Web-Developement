function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
addNumbers();
addNumbers(10, 20);
addNumbers(10, 20, 30);
addNumbers(10, 20, 30, 40);
function userDetails(name, city) {
    if (city === void 0) { city = "Bangalore"; }
    console.log('name' + name);
    console.log('city' + city);
}
userDetails('Raju');
userDetails('Raju', 'ooty');
var greet = function (msg) {
    return msg;
};
console.log(greet('Have a great day'));
greet = function (msg) {
    return 'Welcome ' + msg;
};
console.log(greet('Hello'));
var checktype = function (a, b) {
    console.log(a + b);
};
var show = function () { return console.log("hi"); };
console.log(show());
checktype(10, 20);
checktype(10, 'Ram');
checktype('Ram ', 'sham');

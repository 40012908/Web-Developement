var printVal = function (val) {
    if (typeof (val) == 'string') {
        console.log('Welcome ' + val);
    }
    if (typeof (val) == 'number') {
        console.log('Your Score is ' + val);
    }
};
printVal('Kumaran');
printVal(10);
var printValues = function (val) {
    if (Array.isArray(val)) {
        console.log('print Array ' + val);
        console.log(val);
        console.log.apply(console, val);
        if (typeof (val) == 'object') {
            console.log(val);
        }
    }
    printValues(['Raj', 'Ram', 'Praveen']);
    printValues({ name: 'Kumu' });
};

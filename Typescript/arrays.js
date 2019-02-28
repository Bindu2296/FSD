var arr;
arr = [];
arr[0] = 10;
arr[1] = 2;
console.log("Length of Array : " + arr.length);
console.log(arr[0]);
console.log(arr[1]);
var numbers = [1, 10, 2, 8, 9, 4];
var vals = [
    {
        id: 1
    }, {
        id: 2
    }
];
console.log(numbers[1]);
var index;
var index1;
var x;
for (index = 0; index < numbers.length; index++) {
    console.log('Number is ', numbers[index]);
    x = numbers[0];
}
for (index = 1; index < numbers.length; index++) {
    if (x < numbers[index])
        x = numbers[index];
}
console.log('Largest Number is ', x);
//Sorting...
for (index = 0; index < numbers.length; index++) {
    for (index1 = index + 1; index1 < numbers.length; index1++) {
        if (numbers[index] < numbers[index1]) {
            numbers[index] = numbers[index] + numbers[index1];
            numbers[index1] = numbers[index] - numbers[index1];
            numbers[index] = numbers[index] - numbers[index1];
        }
    }
}
for (var i = 0; i < numbers.length; i++) {
    console.log('Sorted Number is ', numbers[i]);
}
console.log('Sorted Array is ', numbers);
//Perfect Square
function sqroot(num) {
    var t;
    var sqr;
    sqr = num / 2;
    do {
        t = sqr;
        sqr = ((t + (num / t)) / 2);
    } while ((t - sqr) != 0);
    return sqr;
}
for (index = 0; index < numbers.length; index++) {
    x = numbers[0];
    console.log('the sqroot is of ', numbers[index], ' is ', sqroot(numbers[index]));
}
var num2 = [];
var a = 0;
for (var i = 2; i <= numbers.length; i++) {
    for (var j = 0; j <= numbers.length; j++) {
        if ((i * i) == numbers[j]) {
            num2[a] = j;
            a++;
        }
    }
}
console.log('Perfect sq root in the array ', num2);
var max = num2[0];
for (index = 0; index < num2.length; index++) {
    if (max < num2[index]) {
        max = numbers[index];
    }
}
console.log('Max perfct sqrt no', max);

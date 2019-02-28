var arr = [];
arr[0] = 10;
arr[1] = 2;
//console.log(`Length of Array:${arr.length}`)
//console.log(`${arr[0]}`)
var number = [4, 9, 12, 10, 20];
var index;
var max = number[0];
for (index = 0; index < number.length; index++) {
    if (max < number[index]) {
        max = number[index];
    }
}
console.log(max);
var temp;
for (index = 0; index < number.length; index++) {
    if (number[index] > number[index + 1]) {
        number[index] = number[index] + number[index + 1];
        number[index + 1] = number[index] - number[index + 1];
        number[index] = number[index] - number[index + 1];
    }
}
console.log(number);
var arr1;
arr1 = [];
var k = 0;
for (var i = 2; i <= max; i++) {
    for (var j = 0; j <= number.length; j++) {
        if (i * i == number[j]) {
            k = j;
            k++;
        }
    }
}
console.log(arr1);
var max1 = arr1[0];
for (index = 0; index < arr1.length; index++) {
    if (max1 < arr1[index]) {
        max1 = number[index];
    }
}
console.log("Max perfect number : " + max1);

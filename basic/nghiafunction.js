/**
var sum = 0;
for (var i = 1; i <= 10; i++)
    sum += i;
console.log("Sum from 1 to 10 is " + sum);

sum = 0;
for (var i = 20; i <= 37; i++)
sum += i;
console.log("Sum from 20 to 37 is " + sum);


sum = 0;
for (var i = 4; i <= 10; i++)
sum += i;
console.log("Sum from 50 to 100 is " + sum);

let sum = 0;
let sum1 = sumFromTo(1,3);

function sumFromTo(from, to){
    let sum = 0;
    for(let i=from;i<=to;i++){
        sum += i;
    }
    return sum;
}


console.log(`Tong la: ${sum}`);

let numbers = [8,2,1,5,7];


function displayEvenNumbers(numbers){
    let i = 0;
    while(i<numbers.length){
        if(numbers[i]%2==0){
            console.log(numbers[i]);
        }
        i++;
    }
}
displayEvenNumbers(numbers);


let numbers1 = [6,4,2,7,8];
displayEvenNumbers(numbers1);
 */


let numbers1 = [6,4,2,1,8];


function findMinInNumbers(numbers){
    let min = numbers[0];
    let indexMin = 0;
    for(let i=0;i<numbers.length;i++){
        if( numbers[i] < min){
            min = numbers[i];
            indexMin = i;
        }
    }
    return indexMin;
}
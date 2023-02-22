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
for (var i = 50; i <= 10; i++)
sum += i;
console.log("Sum from 50 to 100 is " + sum);


function sumTwoNumber(from,to){
    let sum = 0;
    for(var i= from;i<=to;i++){
        sum += i;
    }
    console.log(`Sum from ${from} to ${to} is ${sum}`);
}

sumTwoNumber(1,10);
sumTwoNumber(50,100);
sumTwoNumber(1,100);


function isEven( number){
    if(number%2==0){
        return true;
    }else{
        return false;
    }
    // console.log("Gia trị trả về là :");
}

let check = isEven(5);
isEven(10);
console.log(check);


// Biến toàn cục
let total = 0;
function sum(a, b){
    total = a+b;

    return total;
}
sum(5,3)
console.log(`Tong la ${total}`);    // 8


// Biến cục bộ

function sum(a, b){
    let total = a+b;

    return total;
}
sum(5,3)
console.log(`Tong la ${total}`);    // total not defined


// Biến toàn cục lắt léo
let total = 0;
function sum(a, b){
    total = a+b;

    return total;
}
sum(5,3)    
sum(7,7)
console.log(`Tong la ${total}`);    //14


  // Biến toàn cục lắt léo 1
let total = 0;
function sum(a, b){
    let total = a+b;

    return total;
}
sum(5,3)    
console.log(`Tong la ${total}`);  // 0


// Khi gọi hàm thì phải theo thứ tự của tham số đầu vào
function printMultiple(message, n) {
    for (var i = 0; i < n; i++)
        console.log(message);
}
printMultiple("Hello", 4);
printMultiple(4, "C0123K1");


let a = 5;
var a1 = 6;
// let a = 7;  // let thì không thể khai báo lại được
var a1 = 8;    // var có thể khai báo lại được


// let thì không hoisting, var thì có
if(1>0){
    var sum = 0;    // 
    for(let i=0;i<3;i++){
        sum += i;
        var name = "hello";
    }
    console.log(`Name in for loop ${name}`);
}

console.log(`Sum is: ${sum}`);
// console.log(`Name out loop ${name}`);

 */










 


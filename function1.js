// let number  = +prompt("Nhập vào con số đi");

/**
function checkPrime(number){
    if(number<=1){
        console.log(`${number} không phải là số nguyên tố`);
        return false;
    }else{
        let prime = true;
        for(let i=2;i<number-1;i++){
            if(number%2==0){
                prime = false;
            }
        }
        if(prime==true){
            console.log(`${number} là số nguyên tố`);
            return true;
        }else{
            console.log(`${number} không phải là số nguyên tố`);
            return false;
        }
    }
}

// let number = 8;
// checkPrime(number)

// Kiểm tra số nguyên tố trong mảng
let arr = [4,2,8,7,1];
for(let i=0;i<arr.length;i++){
    checkPrime(arr[i])
}


function checkPrime(number){
    if(number<=1){
        // console.log(`${number} không phải là số nguyên tố`);
        return false;
    }else{
        let prime = true;
        for(let i=2;i<number-1;i++){
            if(number%2==0){
                prime = false;
            }
        }
        if(prime==true){
            // console.log(`${number} là số nguyên tố`);
            return true;
        }else{
            // console.log(`${number} không phải là số nguyên tố`);
            return false;
        }
    }
}
let arr = [4,2,8,7,1];

var sum = 0;
for(let i=0;i<arr.length;i++){
    let check = checkPrime(arr[i]);
    if(check == true){
        sum+=arr[i];
    }
    if(checkPrime(arr[i])==true){
        sum+=arr[i];
    }
}
console.log(`Tong cac so nguyen to: ${sum}`);

let num1 = 13;
let check = checkPrime(num1);
if(check==true){
    console.log(`${num1} là số nguyên tố`);
}else{
    console.log(`${num1} khong là số nguyên tố`);
}

let numbers1 = [4,6,1];


function sumNumbers(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum += numbers[i];
    }
    return sum;
}
let sum = sumNumbers(numbers2);
console.log(sum);

// Truyen tham tri
function addNumberToArray(num, numbers){
    num = 20;
    numbers.push(num);
}

let numbers1 = [4,6,1];
let num = 10;
addNumberToArray( num, numbers1);

console.log(numbers1);
console.log(num);
 */


let numbers1 = [4,6,1];

function addNumberToArray(numbers){
    let sum = 0;
    let newNumbers = [];
    for(let i = 0;i<numbers.length;i++){
        newNumbers.push(numbers[i]);
        sum+= numbers[i];
    }
    newNumbers.push(sum);
    return newNumbers;
}

function addNumberToArray2(numbers){
    let sum = 0;
    for(let i = 0;i<numbers.length;i++){
        sum+= numbers[i];
    }
    numbers.push(sum);
}
addNumberToArray2(numbers1);
console.log(numbers1);








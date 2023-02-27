/**
//bai1:  Hàm tính tổng các giá trị trong mảng



function sumNumbers(numbers){
    let total = 0;
    for(let i=0;i<numbers.length;i++){
        total += numbers[i];
    }
    return total;
}

//bai2:  Hàm hiển thị các số chẵn trong mảng
function displayEvenNumbers(numbers){
    let i = 0;
    while(i<numbers.length){
        if(numbers[i]%2==0){
            console.log(numbers[i]);
        }
        i++;
    }
}
let numbers = [8,2,1,5,7];
displayEvenNumbers(numbers)

//bai2: Hàm hiển thị các số nguyên tố của mảng

function displayPrimes(numbers){
    for(let i = 0;i<numbers.length;i++){
        if(checkPrime(numbers[i])==true){
            console.log(`${numbers[i]} là số nguyên tố`);
        }
    }
}
function checkPrime(number){
    if(number<=1){
        return false; 
    }else{
        let check = true;
        for(let j=2;j<number-1;j++){
            if(number%j==0){
                check = false;
                break;
            }
        }
        if(check==true){
           return true;
        }else{
            return false;
        }
    }
}

let numbers = [8,2,1,5,7];
displayPrimes(numbers)

//5. Hàm tìm giá trị bé nhất của mảng

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
let numbers = [8,2,5,7,1];
console.log(findMinInNumbers(numbers));


// Hàm nối 1 mảng khác
let numbers1 = [8,2];
let numbers2 = [8,2,5,7];
function concatArray(arr1, arr2){
    for(let i=0;i<arr2.length;i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}

let arrConnected = concatArray(numbers1, numbers2);

console.log(arrConnected);
console.log(numbers1);
 */
// Hàm Join các phần tử theo 1 chuỗi kí tự nhập vào


let numbers = [8,2,5];
// console.log(numbers.join("*"));
function joinElementsBySeparator(separator){
    let str = "";
    for(let i=0;i<numbers.length;i++){
        str = str +  numbers[i];
        if(i!=numbers.length-1){
            str += separator;
        }
    }
    return ;
}
console.log(joinElementsBySeparator("*"));
/*
let i = 1;
while(i<10){
    console.log(i);
    i++;
}
console.log("Gia tri cua i" + i);

let i = 1;
do{
    console.log(i);
    if(i == 5){
        break;
    }
    i++;
}
while(i <= 10)


let i = 1;
while(i <= 10){
    if(i == 5){
        break;
    }
    i++;
    console.log(i);
}

for(let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        continue;
    }
    console.log(i);
}

let i = 1
for(; i <= 10; i++){
    console.log(i);
}

let numbers = [5,4,1,3,7,2];
for(let i=0;i < numbers.length;i+=2){
        console.log(numbers[i]); 
}

let numbers = [5,4,1];
let sum = 0;
for(let i=0;i < numbers.length;i++){
        if(numbers[i]%2 !=0){
                // sum+= numbers[i];
                sum = sum+numbers[i];
        }
}
console.log(sum);

// Hàm tìm giá trị nhỏ nhất của mảng
let numbers = [5,4,8,4, 5];
let max = numbers[0];
for(let i=0;i<numbers.length;i++){
    
    if(numbers[i] < max){
        max = numbers[i];
    }
    
}
console.log(max);
*/
// Hàm vị trí của số 8 trong mảng
let numbers = [5, 4, 8, 4, 5];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 8) {
        count = i;
    }
}
console.log(count);



    
    
    
    
    
    

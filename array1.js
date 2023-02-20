let a = 5;  // số: nguyên, thực
let b = "Hello"
let c;      // 



/**
let numbers1  = [];
let numbers2 = new Array();

// độ dài mảng:  3 phần tử
// chỉ số trong mảng: 0-> 
let numbers = [5,1,3,7,2];
let length = numbers.length;            // 7
let endOfArray = length-1               // 6

console.log("Đô dài" + length);
console.log("Giá trị của vị trí cuối cùng: " + numbers[endOfArray]);

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);


let numbers = [5,4,1,3,7,2];
for(let i=0;i < numbers.length;i++){
        console.log(numbers[i]); 
}

let numbers = [5,4,1];
let sum = 0;
for(let i=0;i < numbers.length;i++){
        if(numbers[i]%2 !=0){
                sum+= numbers[i];
        }
}
numbers[5] = 10;

console.log(numbers[4]);


let arr = [3,5,1];

// arr.push(2);
// arr.push(4);
console.log(arr);

console.log(arr.join("*"));     // 
console.log(arr.reverse());
arr.pop();  // pop: xóa phần tử cuối, thêm ở vị trí cuối: push              
console.log(arr);
arr.unshift(10);        // unshift thêm ở vị trí đầu, shift: xóa vị trí đầu của mảng
console.log(arr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, "Lemon", "Kiwi", "KK");

console.log(fruits);


let numbers = [5,1,4,8,9];

for(let i=0;i<numbers.length/2;i++){
        let temp = numbers[i];
        numbers[i] = numbers[numbers.length-i-1];
        numbers[numbers.length-1-i] = temp;
}
console.log(numbers);

let matrix = [
        [3,1,5,4],
        [2,7,1,8],
        [3,5,1,6]
]

console.log(matrix[1][2]);
console.log(matrix[2][3]);
console.log(matrix[matrix.length-1][matrix[2].length-1]);

let matrix = [
        [3,1,5,4],
        [2,7,1,8],
        [3,5,1,6],
        [1,2,1,2]
]
for(let i=0;i<matrix.length;i++){
        let str = "";
        for(let j=0;j<matrix[i].length;j++){
        //       str += matrix[i][j] + " ";
                str = str + matrix[i][j] + " ";
        }
        console.log(str);
}
 */


let matrix = [
        [3,1,5,4],
        [2,7,1,8],
        [3,5,1,6],
        [1,2,1,2]
]

let sum = 0;
for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
                if(i==j || i+j == matrix[i].length-1){
                        sum = sum + matrix[i][j];
                }
        }
}
/**
 Bài 0: Tính tổng các số chẵn trong ma trận
 Bài 01: Đếm các số lẻ trong ma trận
 Bài 02: Tìm vị trí [i][j] của số nguyên tố đầu tiên trong ma trận
 Bài 1: Tính tổng giá trị tam giác trên bên trái
 Bài 2: Tính tổng giá trị tam giác trên bên phải
 Bài 3: tính tổng giá trị tam giác dưới bên trái 
 Bài 4: tính tổng giá trị tam giác dưới bên phải
 Bài 5: tính tổng các giá trị ở đường viền 
 */














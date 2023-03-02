/**
// khai báo declare funtion
function sum(n1, n2){
    return n1 + n2;
}
// expression function
const sum1 = function(n1,n2){
    return n1+n2;
}

// arrow function
const sum2 = (n1, n2)=>{
    return n1 + n2;
}

console.log(sum2(3,5));

// arrow function với 1 tham số
const print1 = (size)=>{
    for(let i=0;i<size;i++){
        console.log(i);
    }
}
// arrow function với 1 tham số: gọn hơn bỏ dấu ngoặc
const print2 = size =>{
    for(let i=0;i<size;i++){
        console.log(i);
    }
}


let print3 = () =>{
    console.log("Hello ........");
}
print3()


let arr = [3,5,7,1];
let arrNew = arr.map((number, index, arr)=>{
    console.log("hello" + number);
    return "hello" + number;
})
console.log(arrNew);
let arrNew1 =  arr.map((number, index, arr)=>{
    return number*2;
})
console.log(arrNew1);
let arrNew2 =  arr.map((item)=>{
    return item*10;
})
console.log(arrNew2);


const ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}


let index = ages.findIndex((age)=>{
    return age>18;
})

console.log(index);
 */



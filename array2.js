

/**
for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
                if(i==j || i+j == matrix[i].length-1){
                        sum = sum + matrix[i][j];
                }
        }
}
 Bài 0: Tính tổng các số chẵn trong ma trận
 Bài 0+: Tính tổng các số chẵn đầu tiên trên 1 dòng của ma trận
 Bài 0++: Tính tổng các số chẵn thứ 2 trên 1 dòng của ma trận
 Bài 01: Đếm các số lẻ trong ma trận
 Bài 02: Tìm vị trí [i][j] của số nguyên tố đầu tiên trong ma trận
 Bài 1: Tính tổng giá trị tam giác trên bên trái
 Bài 2: Tính tổng giá trị tam giác trên bên phải
 Bài 3: tính tổng giá trị tam giác dưới bên trái 
 Bài 4: tính tổng giá trị tam giác dưới bên phải
 Bài 5: tính tổng các giá trị ở đường viền 


  // Bài 0
 let sum = 0;
 for(let i=0;i<m.length;i++){
    for(let j=0;j<m[i].length;j++){
        if(m[i][j]%2==0){
            sum = sum + m[i][j];
        }
    }
 }
 console.log(`Tong ma tran la ${sum}`);


  // Bài 0+
  let sum = 0;
  for(let i=0;i<m.length;i++){
     for(let j=0;j<m[i].length;j++){
         if(m[i][j]%2==0){
             sum = sum + m[i][j];
             break;
         }
     }
  }
  console.log(`Tong ma tran la ${sum}`);

  let sum = 0;
  for(let i=0;i<m.length;i++){
    let count = 0;
     for(let j=0;j<m[i].length;j++){
         if(m[i][j]%2==0 ){
             count = count+1;
         }
         if(count==2){
            sum = sum+m[i][j];
            break;
         }
     }
  }
  console.log(`Tong ma tran la ${sum}`);


 // Tính tổng các số nguyên tố trong ma trận
let sumPrime = 0;
  for(let i=0;i<m.length;i++){
     for(let j=0;j<m[i].length;j++){
        let prime = true;
        if(m[i][j]<1){
            prime = false;
        }else{
            for(let z=1;z<m[i][j]-1;z++){
                if(m[i][j]%2==0){
                    prime = false;
                    break;
                }
            }
        }
        if(prime==true){
            sumPrime += m[i][j];
        }
     }
  }
console.log(`Tong cac so nguyen to: ${sumPrime}`);

// Bài 1: Tính tổng giá trị tam giác trên bên trái
let m = [
    [3,1,5,4],
    [2,7,1,8],
    [3,5,1,6],
    [1,2,1,2]
]
let sum = 0;
for(let i=0;i<m.length;i++){
    for(let j=0;j<=i;j++){
        sum += m[i][j];
    }
}
 */

  // Bài 2: Tính tổng giá trị tam giác trên bên phải
let m = [
    [3,1,5,4],
    [2,7,1,8],
    [3,5,1,6],
    [1,2,1,2]
]
let sum = 0;
for(let i=0;i<m.length;i++){
    for(let j=i;j< m[i].length;j++){
        sum += m[i][j];
    }
}

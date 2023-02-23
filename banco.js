

let banco = new Array(5);
for(let i=0;i<banco.length;i++){
    banco[i] = new Array(5);
    for(let j=0;j<banco[i].length;j++){
        banco[i][j] = 'o';
    }
}
console.log(banco);


drawCheese();
function drawCheese(){
    let str = "";
    for(let i=0;i<banco.length;i++){
        str += "<tr>"
        for(let j=0;j<banco[i].length;j++){
            str += "<td>";
            str += banco[i][j];
            str += "</td>";
        }
        str += "</tr>"
    }
    document.getElementById("tbBanCo").innerHTML = str
}


function handleClick(){
    let x = prompt("Nhâp x:");
    let y = prompt("Nhập y: ");
    if(banco[x][y]=='o'){
        banco[x][y] ='x'
    }else{
        banco[x][y] ='o'
    }

    drawCheese();
}

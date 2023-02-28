let MIN = 10;
let MAX = 200;
let COLOR_DEFAULT = 'blue';
// Định nghĩa class bằng function
function Rectangle(width, height){
    this.width = width;
    this.height = height;

    // getter kiểm soát quyền truy cập
    this.getWidth = function(){
        return this.width;
    }
    this.getHeight = function(){
        return this.height;
    }
    this.setWidth = function(width){
        this.width = width;
    }
    this.setHeight = function(height){
        this.height = height;
    }
    // phương thức toString(): giúp trả về thông tin của đối tượng
    this.toString = function(){
        return `Thông tin của hình chữ nhật là w: ${this.width} , h: ${this.height}`;
    }

    this.getArea = function(){
        return this.height*this.width;
    }

}

// biến r là biến toàn cục lưu thông tin của 1 hình chữ nhật hiện tại
let r = new Rectangle(100, 80);
// console.log(`Thông tin của hình chữ nhật là w: ${r1.getWidth()} , h: ${r1.getHeight()}`);
console.log(r.toString());

/**
let r2 = new Rectangle(200, 200);
// console.log(`Thông tin của hình chữ nhật là w: ${r2.getWidth()} , h: ${r2.getHeight()}`);
console.log(r2.toString());

 */

drawRectangle(COLOR_DEFAULT);


function drawRectangle(color){
    let canvas = document.getElementById("idCanvas");
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle= color;
    ctx.fillRect(10, 10, r.getWidth(), r.getHeight())
}


function handleRandomClick(){
    // Tôi muốn random 1 con số trong khoảng từ 10-200
    // console.log(Math.random());
    let w = Math.random() * (MAX - MIN) + MIN;
    let h = Math.random() * (MAX - MIN) + MIN;

    
    r.setWidth(w);
    r.setHeight(h);
    console.log(r.toString());

    drawRectangle(COLOR_DEFAULT);

}

function handleAreaClick(){
    alert(`Diện tích của hình chữ nhật là:  ${r.getArea()}`)
}

function handleX2Click(){
    r.setWidth(r.getWidth()*2);
    r.setHeight(r.getHeight()*2);
    drawRectangle(COLOR_DEFAULT);

}

function handleChangColor(){
    let color = getRandomColor();
    console.log(`Color random: ${color}`);


    drawRectangle(color);
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



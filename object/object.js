let arr = new Array();

let staffs = [
    [1, "Quang Dang", "02/02/2000", true, ["bida", "bong da"]],
    [2, "Bao Thi", "02/02/2002", true, []],
    [3, "Châu Nghĩa", "02/02/2002", true, ["bong da", ""]]
]
console.log(`Nhan viên Bảo Thi với ID ${staffs[1][0]}`);


function Staff(id, name, dob, gender, phone){
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.gender = gender;
    this.phone = phone
    this.hobbies = [];

    this.setHobbies = function (hobbies){
        let check = true;
        for(let i= 0; i<hobbies.length;i++){
            if(hobbies[i] == 'choi da'){
                check = false;
            }
        }
        if(check==true){
            this.hobbies = hobbies;
        }else{
            console.log(`Thong tin sở thích không hợp lệ `);
        }
        
    }
    this.getName = function (){
        return this.name;
    }

    this.getPhone = function (){
        // 0399578133 --> 0399578XXX
        let str = this.phone.substring(0, this.phone.length - 3) + "XXX";
        // return this.phone;
        return str;
    }
}

let s1 = new Staff(1, "Quang Dang", "02/02/2000", true, "0399578133");
s1.hobbies = ["choi da"];

s1.setHobbies(["bida", "bongda"])   // setter
let s2 = new Staff(2, "Bao Thi", "02/02/2000", true, "0399578133");

let s3 = new Staff(3, "Châu Nghĩa", "02/02/2000", true, "0399578133");

// console.log(`Thông tin của anh Châu Nghĩa ${s3.name} ${s3.phone}`);

console.log(`Thông tin của anh Châu Nghĩa ${s3.getName()} ${s3.getPhone()}`);

// gettter, setter: kiểm soát quyền truy cập và cập nhật thông tin của đối tượng



/**
let f1 = new FanElectric(1, "blue", "SENKO");
let f2 = new FanElectric(2, "yellow", "ASIA");
let f3 = new FanElectric(3, "blue", "SANYO");
let f4 = new FanElectric(4, "blue", "SENKO");

let fansHue = [f1, f2, f3, f4];

for(let i=0;i<fans.length;i++){
    fansHue[i].setStatus(true);
}

for(let i=0;i<fans.length;i++){
    console.log(`Quạt ${fansHue[i].id} đang ${fansHue[i].status ? 'bật' : 'tắt'}`);
}
 */
function FanElectric(id, color, company){
    this.id = id;
    this.color = color;
    this.company = company;
    this.speed = 1;
    this.status = false;

    this.setStatus = function (status){
        this.status = status;
    }


}
function Store(name, address){
    this.name = name;
    this.address = address;

    this.fans = [];
    this.setFans = function (fans){
        this.fans = fans;
    }
    this.showFans = function(){
        for(let i=0;i<this.fans.length;i++){
            console.log(`Quạt ${this.fans[i].id} đang ${this.fans[i].status ? 'bật' : 'tắt'}`);
        }
    }

    this.startFans = function(){
        for(let i=0;i<this.fans.length;i++){
            this.fans[i].setStatus(true);
        }
    }
}

let storeHue = new Store("Bao Thi Electric Hue", "29 NTP");
let f1 = new FanElectric(1, "blue", "SENKO");
let f2 = new FanElectric(2, "yellow", "ASIA");
let f3 = new FanElectric(3, "blue", "SANYO");
let f4 = new FanElectric(4, "blue", "SENKO");
let fansHue = [f1, f2, f3, f4];

storeHue.setFans(fansHue);

storeHue.showFans();

storeHue.startFans();

storeHue.showFans();
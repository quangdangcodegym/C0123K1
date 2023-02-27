
/**
 * function Product(id,name, brand, price){
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.price = price;

    this.getName = function (){
        // this: đại diện cho đối tượng hiện tại
        return this.name;
    }
    this.setName = function(name){
        this.name = name;
    }
    // Về viết thêm: phương thức (method) getter/setter cho các thuộc tính/properties

}
// Từ khóa new để khởi tạo đối tượng
let p1 = new Product(1, "Iphone 13", "Apple", 900);
let p2 = new Product(2, "Iphone 14", "Apple", 1000);
let p3 = new Product(3, "Iphone X", "Apple", 900);
let p4 = new Product(4, "Iphone XX", "Apple", 1000);

**/
// Cách tạo đối tượng bằng : object literals
let p1 = {
    id: 1,
    name: "Iphone 13",
    brand: "Apple",
    price: 900,
    getName: function(){
        return this.name;
    }
}

console.log(p1.getName());


// Cách tạo đối tượng bằng : singleton

let p2 = new  function(){
    this.id = 1;
    this.name = "Iphone 13................";
    this.brand = "Apple";
    this.price = 1000;
    this.getName = function(){
        return this.name;
    }
}

console.log(p2.getName());


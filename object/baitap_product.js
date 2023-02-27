function Product(id,name, brand, price){
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


/**
Bài tập:  
 + Về viết thêm: phương thức (method) getter/setter cho các thuộc tính/properties
 + Tạo 1 mảng gồm 5 sản phẩm, hiển thị thông tin của 5 sản phẩm đó
 + Tính tổng giá trị các sản phẩm trong mảng
 + Xóa sản phẩm có mã là 3
 + Cập nhật thông tin (tên, nhà sản xuất, giá) sản phẩm có mã là ID = 2
 + Thêm 1 sản phẩm (id, tên, nhà sản xuất, giá)


 */
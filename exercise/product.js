function Product(id, name, price, quantity){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;

    this.getQuantity = function(){
        return this.quantity;
    }
    this.setQuantity = function(quantity){
        this.quantity  = quantity;
    }
    this.getId = function(){
        return this.id;
    }
    this.setId = function(id){
        this.id = id;
    }
    this.getName = function(){
        return this.name;
    }
    this.setName = function(name){
        this.name = name;
    }
    this.getPrice = function(){
        return this.price;
    }
    this.setPrice  = function(price){
        this.price = price;
    }
}

function initData(){
    let p1 = new Product(1, "Sony v1", 10000000, 10);
    let p2 = new Product(10, "Sony v1", 10000000, 10);
    let p3 = new Product(4, "Sony v1", 30000000, 10);
    let p4 = new Product(3, "Sony v1", 10000000, 10);

    products = [p1, p2, p3, p4];
}
function drawProduct(){
    let str = "";
    for(let i=0;i<products.length;i++){
        str += `
        <tr>
            <td>${products[i].getId()}</td>
            <td>${products[i].getName()}</td>
            <td class="text-right">1</td>
            <td class="text-right">${products[i].getPrice()}</td>
            <td class="text-right">${formatNumberCurrency(products[i].getPrice())}</td>
            <td class="text-center">
                <input type="button" class="btn  btn-danger" value="Delete"/>
                <input type="button" onclick="handleEditItem(${products[i].getId()})" class="btn  btn-dark" value="Edit"/>
            </td>
        </tr>
        `
    }
    document.getElementById("tbProducts").innerHTML = str;
}

function formatNumberCurrency(price){
    return  price.toLocaleString('vi-VI', {style : 'currency', currency : 'VND'});
}

function handleCreate(){
    let name = document.getElementById("txtName").value;
    let price = document.getElementById("txtPrice").value;
    let quantity = document.getElementById("txtQuantity").value;


    if(name == "" || price == "" || quantity == ""){
        alert("Thông tin không hợp lệ vui lòng nhập lại")
    }else{
        // tim sản phẩm có ID lớn nhất
        let maxId = productMaxId(products) + 1;
        let product = new Product(maxId, name, price, quantity);

        products.push(product);
        drawProduct();
    }
    

}
let products = [];
initData();
drawProduct();

function productMaxId(products){
    let pMax = products[0];
    for(let i=0;i<products.length;i++){
        if(products[i].getId()>pMax.getId()){
            pMax = products[i];
        }
    }
    return pMax.getId();
}

function handleEditItem(id){
    let product = findProductById(id);


    document.getElementById("idCreate").style.display = "none";
    document.getElementById("idUpdate").style.display = "block";
    document.getElementById("idCancel").style.display = "block";

    document.getElementById("txtName").value = product.getName();
    document.getElementById("txtPrice").value = product.getPrice();
    document.getElementById("txtQuantity").value = product.getQuantity();

    document.getElementById("txtProductUpdate").value = id;


}
function findProductById(id){
    for(let i=0;i<products.length;i++){
        if(products[i].getId()==id){
            return products[i];
        }
    }
    return null;
}
function handleUpdate(){
    let name = document.getElementById("txtName").value;
    let price = document.getElementById("txtPrice").value;
    let quantity = document.getElementById("txtQuantity").value;

    let idProductUpdate = document.getElementById("txtProductUpdate").value;


    if(name == "" || price == "" || quantity == ""){
        alert("Thông tin không hợp lệ vui lòng nhập lại")
    }else{
        let p = new Product();
        p.setName(name);
        p.setPrice(price);
        p.setPrice(quantity);
        updateProductById(idProductUpdate, p);
        drawProduct();
    }

    
    document.getElementById("idCreate").style.display = "block";
    document.getElementById("idUpdate").style.display = "none";
    document.getElementById("idCancel").style.display = "none";


}

function updateProductById(idProduct, product){
    for(let i=0;i<products.length;i++){
        if(products[i].getId()==idProduct){
            products[i].setName(product.getName());
            products[i].setPrice(product.getPrice());
            products[i].setQuantity(product.getQuantity());
        }
    }
}
function resetForm(){
    document.getElementById("txtName").value = "";
    document.getElementById("txtPrice").value = "";
    document.getElementById("txtQuantity").value = "";
}






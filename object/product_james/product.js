function Product(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;

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

let p1 = new Product(1, "Sony v1", 10000);
let p2 = new Product(2, "Sony v1", 10000);
let p3 = new Product(3, "Sony v1", 10000);
let p4 = new Product(4, "Sony v1", 10000);

let products = [p1, p2, p3, p4];

function drawProduct(){
    let str = "";
    for(let i=0;i<products.length;i++){
        str += "<tr>"
        str += "<td>" + products[i].getName() + "</td>";
        str += `
                    <td style="text-align: end;">
                    <i class="fa-solid fa-square-plus"></i>
                    <i class="fa-solid fa-trash-can"></i>
                </td>
            `;
        str += "</tr>"  
    }
    document.getElementById("tbProducts").innerHTML = str;
}

drawProduct();

function handleAddProduct(){
    let nameProduct = document.getElementById("txtProduct").value;
    let priceProduct = document.getElementById("txtPrice").value;
    let idNew = products[products.length-1].getId() + 1;


    let product = new Product(idNew, nameProduct, priceProduct)
    products.push(product)

    drawProduct();

}
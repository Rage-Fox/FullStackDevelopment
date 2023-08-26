let tbody = document.getElementById('tbody');
let index=1;
var obj=[{
    "productId":"456789",
    "name":"Realme Mobile",
    "price":"16000",
},{
    "productId":"123456",
    "name":"MI Mobile",
    "price":"18000",
},{
    "productId":"365648",
    "name":"Vivo Mobile",
    "price":"20000",
},];
function addDefault(){
    for (let i = 0; i < obj.length; i++) {
        let tr = document.createElement('tr');
        const element = obj[i];
        let td1 = document.createElement('td');
        let td2= document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        tr.setAttribute('id',index);
        td1.innerHTML=element.productId;
        td2.innerHTML=element.name;
        td3.innerHTML=element.price;
        td4.innerHTML='<button onclick="edit(this.parentNode.parentNode.id)"><i class="fa fa-solid fa-pen text-warning me-2" id="edit"></i></button><button onclick="delete_tr(this.parentNode.parentNode.id)"><i class="fa fa-solid fa-trash text-danger" id="delete"></i></button>';
        td1.setAttribute('id',"product_id");
        td2.setAttribute('id',"name");
        td3.setAttribute('id',"price");
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tbody.appendChild(tr);
        index++;
    }
}
addDefault();
function addnew(){
    let tr = document.createElement('tr');
    let productId=prompt("Enter product id");
    let name=prompt("Enter product name");
    let price=prompt("Enter product price");
    if(productId===null||name===null||price===null){
        alert("Please enter correct information without empty values!");
    }
    else{
        let td1 = document.createElement('td');
        let td2= document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        tr.setAttribute('id',index);
        td1.innerHTML=productId;
        td2.innerHTML=name;
        td3.innerHTML=price;
        td4.innerHTML='<button onclick="edit(this.parentNode.parentNode.id)"><i class="fa fa-solid fa-pen text-warning me-2" id="edit"></i></button><button onclick="delete_tr(this.parentNode.parentNode.id)"><i class="fa fa-solid fa-trash text-danger" id="delete"></i></button>';
        td1.setAttribute('id',"product_id");
        td2.setAttribute('id',"name");
        td3.setAttribute('id',"price");
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tbody.appendChild(tr);
        index++;
    }
}
function delete_tr(id){
    if(confirm("Do you want to delete this record?")==true){
        let tr = document.getElementById(`${id}`);
        tbody.removeChild(tr);
    }
}
function edit(id){
    let tr = document.getElementById(`${id}`);
    let td = tr.querySelectorAll("td");
    let new_product = prompt("Enter new product id:");
    let new_name = prompt("Enter new product name:");
    let new_price = prompt("Enter new product price:");
    console.log(new_product);
    if(new_product===null||new_name===null||new_price===null){
        alert("Please enter correct information without empty values!");
    }
    else{
        let values = [new_product,new_name,new_price];
        for(let i=0;i<td.length-1;i++){
            td[i].innerHTML=values[i];
        }
    }
}
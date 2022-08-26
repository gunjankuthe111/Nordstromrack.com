{
    let bag = JSON.parse(localStorage.getItem("bag")) ;
    let products = document.getElementById("data");
    let total = 0;
    bag.forEach(({title,price,image})=>{
        total = total+price;
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = image;
        let div2 = document.createElement("div");
        let p1 = document.createElement("p");
        p1.innerText = title;
        let p2 = document.createElement("p");
        p2.innerText = `Price :- ₹ ${price}`;

        div1.append(img);
        div2.append(p1,p2);
        div.append(div1,div2);
        products.append(div);
    })
    
    
    let tax = total*0.05;
    let shipping = 0;
    if(total>0) shipping = 50;
    let bill = total + shipping + tax;
    document.getElementById("total").innerText = total.toFixed(2);
    document.getElementById("shipping").innerText = shipping;
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("totalBill").innerText = bill.toFixed(2);
}


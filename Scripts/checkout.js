
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
        p2.innerText = `Price :- $ ${price}`;

        div1.append(img);
        div2.append(p1,p2);
        div.append(div1,div2);
        products.append(div);
    })


    let tax = total * 0.05;
    let shipping = 0;
    if (total > 500) shipping = 50;
    let bill = total + shipping + tax ;
    document.getElementById("total").innerText = total.toFixed(2);
    document.getElementById("shipping").innerText = shipping;
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("totalBill").innerText = bill.toFixed(2);
    inpt();
    




function inpt(){
    let promo = document.getElementById("promo").value;
    let discount = 0;

    if (promo == "MASAI30") {
      discount = total * 0.3;
    }
    let actual = total + shipping + tax - discount;
    document.getElementById("totals").innerText = total.toFixed(2);
    document.getElementById("shippings").innerText = shipping;
    document.getElementById("taxs").innerText = tax.toFixed(2);
    document.getElementById("discount").innerText = discount.toFixed(2);
    document.getElementById("totalBills").innerText = actual.toFixed(2);
}


let buy = () =>{

    let first1 = document.getElementById("first1");
    let last1 = document.getElementById("last1");
    let add1 = document.getElementById("add1");
    let first2 = document.getElementById("first2");
    let last2 = document.getElementById("last2");
    let add2 = document.getElementById("add2");
    let email = document.getElementById("email");
    let card = document.getElementById("card");
    let date = document.getElementById("date");
    let num = document.getElementById("num");
    if(first1.value =="" || first2.value=="" || last1.value=="" || last2.value=="" || add1.value=="" || add2.value=="" || date.value=="" || card.value=="" || email.value=="" || num.value==""){
        alert("Enter all the details");
    }else{
        alert("Your order has been successfully placed");
        first1.value = null;
        first2.value = null;
        last1.value = null;
        last2.value = null;
        add1.value = null;
        add2.value = null;
        date.value = null;
        card.value = null;
        email.value = null;
        num.value = null;
        document.getElementById("promo").value = null;
        let arr = [];
        localStorage.setItem("bag", JSON.stringify(arr));
    }
    
}

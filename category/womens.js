/*

links = {
    "https://yooxdb.herokuapp.com/MenNew",
    "https://yooxdb.herokuapp.com/MenOne",
    "https://yooxdb.herokuapp.com/WomenNew",
    "https://yooxdb.herokuapp.com/WomenOne",
    "https://yooxdb.herokuapp.com/KidsNew",
    "https://yooxdb.herokuapp.com/KidsOne",
}
*/

async function getData(){
    try{
        let res = await fetch(`https://yooxdb.herokuapp.com/WomenOne`);
        let data = await res.json();
        console.log("data",data);
        append(data);
    }
    catch (error){
        console.log(error);
    }    
}

getData();

function append(data){
    data.forEach(({avatar,type,Brand,strikedOfPrice,Discount,Price})=>{
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute('src',avatar);
        img.addEventListener('click',()=>{
            producttransfer(avatar,type,Brand,strikedOfPrice,Discount,Price);
        });

        let brand = document.createElement("p");
        brand.innerText = Brand;
        brand.style.fontWeight = '300';
        brand.style.color = '#A52A2A';
        brand.style.fontWeight = 'bold';
        brand.addEventListener('click',()=>{
            producttransfer(avatar,type,Brand,strikedOfPrice,Discount,Price);
        });
        brand.style.cursor = 'pointer';

        let category = document.createElement("p");
        category.innerText = type;

        let orgPrice = document.createElement("p");
        orgPrice.innerText = "$"+strikedOfPrice;
        orgPrice.style.textDecoration = "line-through";

        let disc = document.createElement("p");
        disc.innerText = Discount+"  "+"off";

        let specialPrice = document.createElement("h4");
        specialPrice.innerText = "$"+Price;   
        specialPrice.style.color = '#00008B	';
        
        div.append(img,category,brand,specialPrice,disc,orgPrice);
        document.getElementById("container").append(div);
    });
}

/*
function producttransfer(avatar,type,Brand,strikedOfPrice,Discount,Price){
    let productObj = {
        avatar,
        type,
        Brand,
        strikedOfPrice,
        Discount,
        Price,
    }
    localStorage.setItem('allProduct',JSON.stringify(productObj));
    window.location.href = 'product.html';
}
*/
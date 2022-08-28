let productDetails = JSON.parse(localStorage.getItem('product'));


function append({brand,name,price,category,images} = productDetails){
    let img = document.createElement('img');
    img.setAttribute('src',images);

    let Brand = document.createElement("h3");
    Brand.innerText = brand;

    let title = document.createElement('p');
    title.innerText = name;    

    let type = document.createElement("p");
    type.innerText = category;

    // let orgPrice = document.createElement("p");
    // orgPrice.innerText = "$"+strikedOfPrice;
    // orgPrice.style.textDecoration = "line-through";

    // let disc = document.createElement("p");
    // disc.innerText = Discount+"  "+"off";
    

    let specialPrice = document.createElement("h4");
    specialPrice.innerText = `$ ${price}`;    
    specialPrice.style.color = '#0000CD';   

    let shipping = document.createElement("p");
    shipping.innerText = "Free shipping on Order $150+";
    shipping.style.color = "#FF6347"

    let description = document.createElement('p');
    description.innerText = "This is the best website to explore your shopping & please share you share thoughts with us, and rate us. it helps us to improve our service. You will always get better service here."
    description.style.fontSize = '15px';

    let but = document.createElement('button');
    but.innerText = "Add to Bag";
    but.addEventListener('click',function(){
        addToBag(brand,name,price,category,images);
    })

    let delevery = document.createElement('p');
    delevery.innerText = "Delivery";
    delevery.style.fontSize = '13px';
    
    document.getElementById('image').append(img);
    document.getElementById('details').append(Brand,title,type,specialPrice,shipping,description); 
    document.getElementById('bag').append(delevery,but);   
}
append({avatar,type,Brand,strikedOfPrice,Discount,Price} = productDetails);

let productArr = JSON.parse(localStorage.getItem('bag')) || [];
function addToBag(brand,name,price,category,images){
    let size = document.getElementById('size').value;

    let title = name;
    let image = images;
    let details = {
        size,
        image,
        category,
        brand,        
        title,
        price,
    }
    productArr.push(details);
    if(size == ""){
        alert('Please select the size');
    }
    else{
        localStorage.setItem('bag',JSON.stringify(productArr));
        console.log(productArr);
    }    
}











/*

let Details = JSON.parse(localStorage.getItem('allProduct'));


function append({avatar,type,Brand,strikedOfPrice,Discount,Price} = Details){
    let img = document.createElement('img');
    img.setAttribute('src',avatar);

    let brand = document.createElement("h3");
    brand.innerText = Brand;

    let category = document.createElement("p");
    category.innerText = type;

    let orgPrice = document.createElement("p");
    orgPrice.innerText = "$"+strikedOfPrice;
    orgPrice.style.textDecoration = "line-through";

    let disc = document.createElement("p");
    disc.innerText = Discount+"  "+"off";
    

    let specialPrice = document.createElement("h4");
    specialPrice.innerText = "$"+Price;    
    specialPrice.style.color = '#0000CD';   

    let shipping = document.createElement("p");
    shipping.innerText = "Free shipping on Order $150+";
    shipping.style.color = "#FF6347"

    let description = document.createElement('p');
    description.innerText = "This is the best website to explore your shopping & please share you share thoughts with us, and rate us. it helps us to improve our service. You will always get better service here."
    description.style.fontSize = '15px';

    let but = document.createElement('button');
    but.innerText = "Add to Bag";
    but.addEventListener('click',function(){
        addToBag(avatar,type,Brand,strikedOfPrice,Discount,Price);
    })

    let delevery = document.createElement('p');
    delevery.innerText = "Delivery";
    delevery.style.fontSize = '13px';
    
    document.getElementById('image').append(img);
    document.getElementById('details').append(brand,category,specialPrice,disc,orgPrice,shipping,description); 
    document.getElementById('bag').append(delevery,but);   
}
append({avatar,type,Brand,strikedOfPrice,Discount,Price} = Details);

let Arr = JSON.parse(localStorage.getItem('bag')) || [];
function addToBag(avatar,type,Brand,strikedOfPrice,Discount,Price){
    let size = document.getElementById('size').value;
    console.log(size);
    let allDetails = {
        size,
        avatar,
        type,
        Brand,
        strikedOfPrice,
        Discount,
        Price,
    }
    Arr.push(allDetails);
    if(size == ""){
        alert('Please select the size');
    }
    else{
        localStorage.setItem('bag',JSON.stringify(Arr));
        console.log(Arr);
    }    
}

*/
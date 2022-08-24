async function getData(){
    try{
        let res = await fetch(`https://yooxdb.herokuapp.com/MenNew`);
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

        let brand = document.createElement("p");
        brand.innerText = Brand;

        let category = document.createElement("p");
        category.innerText = type;

        let orgPrice = document.createElement("p");
        orgPrice.innerText = strikedOfPrice;
        orgPrice.style.textDecoration = "line-through";

        let disc = document.createElement("p");
        disc.innerText = Discount+"  "+"off";

        let specialPrice = document.createElement("p");
        specialPrice.innerText = Price;   
        
        div.append(img,category,brand,specialPrice,disc,orgPrice);
        document.getElementById("container").append(div);
    });
}
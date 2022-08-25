let data = async () => {
  try {
    let res = await fetch("https://fakestoreapi.com/products?limit=5");
    res = await res.json();
    console.log(res)
    localStorage.setItem("bag", JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
};

data();

let bagData = JSON.parse(localStorage.getItem("bag")) || [];
console.log(bagData);
let appendData = (bagData) => {
  let products = document.getElementById("products");
  products.innerHTML = null;

  let noOfProd = document.getElementById("prodNo");
  noOfProd.innerText = bagData.length;0

  let saved = JSON.parse(localStorage.getItem("saved")) || [];
  document.getElementById("savedNo").innerText = saved.length; 


  let total = 0;

  bagData.forEach(({price, title, image},index) => {

    total = total+price;
    
    let div = document.createElement("div");
    div.setAttribute("id","prod")
    let divA = document.createElement("div");
    let divB = document.createElement("div");
    divB.setAttribute("class","restore")
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let img = document.createElement("img");
    img.src = image;
    let p1 = document.createElement("p");
    p1.innerText = title;
    let p2 = document.createElement("p");
    p2.innerText = `Price :- ${price}`;

    let b1 = document.createElement("a");
    b1.innerText = "Remove";
    b1.addEventListener("click",()=>{
      bagData.splice(index,1);
      localStorage.setItem("bag", JSON.stringify(bagData));
      appendData(bagData);
    })
    let b2 = document.createElement("a");
    b2.addEventListener("click",()=>{
      let ele = bagData[index];
      
      let count = true;
      for(let i=0;i<saved.length;i++){
        if(saved[i].title==title){
          count = false;
        }
      }
      if (saved.length==0 || count) {
        saved.push(ele);
        localStorage.setItem("saved", JSON.stringify(saved));
      }
      bagData.splice(index, 1);
      localStorage.setItem("bag", JSON.stringify(bagData));
      appendData(bagData);
    })
    b2.innerText = "Save for later";

    div1.append(img);
    div2.append(p1, p2);
    divA.append(div1,div2)
    divB.append(b1,b2);
    div.append(divA,divB);
    products.append(div);
  });

  let tax = total*0.05;
  let shipping = 0;
  if(total>0) shipping = 10;
  let bill = total + shipping + tax;
  document.getElementById("total").innerText = total;
  document.getElementById("shipping").innerText = shipping;
  document.getElementById("tax").innerText = tax.toFixed(2);
  document.getElementById("bill").innerText = bill.toFixed(2);

  let delivery = document.getElementById("delivery");
  if(bill>=150){
    delivery.style.width = "100%";
  }else{
    let a = (bill/150)*100;
    delivery.style.width = `${a}%`;
  }
};

appendData(bagData);


// let cart = document.querySelector("#section>div:first-child");
// cart.addEventListener("click",()=>{
//   let Data = JSON.parse(localStorage.getItem("bag")) || [];
//   appendData(Data);
//   console.log(4);
// })

// let savedBag = document.querySelector("#section>div:last-child");
// savedBag.addEventListener("click", () => {
//   let Saved = JSON.parse(localStorage.getItem("saved")) || [];
//   appendData(Saved);
//   document.getElementById("checkout").innerHTML = null;
//   let restore = document.querySelectorAll(".restore")
//   restore.innerHTML = null;

//   let btn = document.createElement("p");
//   btn.innerText = "Add to Bag"
//   restore.append(btn);

//   console.log(3)
// });
let data = async () => {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    res = await res.json();
    console.log(res)
    localStorage.setItem("bag", JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
};

data();

let bagData = JSON.parse(localStorage.getItem("bag"));
console.log(bagData);
let appendData = () => {
  let products = document.getElementById("products");
  products.innerHTML = null;

  let noOfProd = document.getElementById("prodNo");
  noOfProd.innerText = bagData.length;

  bagData.forEach(({price, title, image}) => {
    let div = document.createElement("div");
    div.setAttribute("id","prod")
    let divA = document.createElement("div");
    let divB = document.createElement("div");
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
    let b2 = document.createElement("a");
    b2.innerText = "Save for later";

    div1.append(img);
    div2.append(p1, p2);
    divA.append(div1,div2)
    divB.append(b1,b2);
    div.append(divA,divB);
    products.append(div);
  });
};

appendData();

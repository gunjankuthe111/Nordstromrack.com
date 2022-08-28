
let sec_3_counter = 0;
let div_3 = document.querySelector("#mid-sec-3>img");
div_3.src = "https://n.nordstrommedia.com/id/147b8db9-5f12-4d97-8346-d930aa5c35ba.jpeg?h=720&w=1608";
div_3.addEventListener("click", function () {
    window.location.href = "womens.html"
})
setInterval(function () {
    if (sec_3_counter == mid_sec_3.length) {
        sec_3_counter = 0;
    }
    div_3.src = mid_sec_3[sec_3_counter].image;
    sec_3_counter++;
    div_3.addEventListener("click", function () {
        window.location.href = "womens.html"
    })
}, 3000);

let sec_6_counter = 0;
let div_6 = document.querySelector("#mid-sec-6>img");
div_6.src = "https://n.nordstrommedia.com/id/eb9ddacd-b3cb-4f4c-a515-4b19d40dd545.jpeg?h=200&w=1608";

setInterval(function () {
    if (sec_6_counter == mid_sec_6.length) {
        sec_6_counter = 0;
    }
    div_6.src = mid_sec_6[sec_6_counter];
    sec_6_counter++;
}, 3000);


let data = JSON.parse(localStorage.getItem("product")) || [];
let div = document.querySelectorAll("#md-box-1>div");
for (let i = 0; i < div.length; i++) {
    div[i].addEventListener("click",function(){
        productTransfer(mid_sec_1[i])
    })
}


function productTransfer(elem) {
    let productObj = {
        avatar: elem.images,
        type: elem.category,
        Brand: elem.brand,
        strikedOfPrice:"199.99",
        Discount: "50%",
        Price:elem.price,
    }
    localStorage.setItem('product', JSON.stringify(productObj));
    window.location.href = 'Products/product.html';
}
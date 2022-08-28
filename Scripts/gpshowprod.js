let Product=JSON.parse(localStorage.getItem("gphome"));
    let el=Product[0];
    function displaypro(el)
    {
        let container=document.getElementById("showhomeprodet");
        container.innerHTML=null;
        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let div3=document.createElement("div");
        div3.setAttribute("id","ratingdiv");
        let image=document.createElement("img");
        image.src=el.home_image;
        image.setAttribute("class","homeimg")
        let title=document.createElement("h2");
        title.innerText=el.home_product_title;
        let details=document.createElement("p");
        details.innerText=el.home_pro_details;
        details.style.color="grey";
        details.style.fontSize="16px"
        let price=document.createElement("h2");
        price.innerText=el.Price;
        price.style.color="green";
        let rating=document.createElement("img");
        rating.setAttribute("class","ratingimg");
        rating.src=el.pro_rating;
        let discount=document.createElement("p");
        discount.innerText="Get a $40 Bonus Note when you use a new Nordstrom credit card.";
        let avp=document.createElement("h3");
        avp.innerText=el.products_av;
        avp.setAttribute("class","svg");
        let delivary=document.createElement("p");
        delivary.innerText=el.home_order;
        delivary.style.color="grey";
        delivary.style.fontSize="20px";
        let button=document.createElement("button");
        button.innerText="Add to Bag";
        button.addEventListener("click",function(){
            addtobag(el);
        })
        button.setAttribute("class","addtobaggp");
        div1.append(image);
        div3.append(rating,avp);
        div2.append(title,details,discount,price,div3,delivary,button);
        container.append(div1,div2);
    }
    displaypro(el);
    function addtobag(el)
    {
        let image=el.home_image;
        let title=el.home_product_title;
        let price=el.Price;
        let obj={
            image,
            title,
            price,
        }
        localStorage.setItem("bag",JSON.stringify(obj));
        window.location.href="#";
    }
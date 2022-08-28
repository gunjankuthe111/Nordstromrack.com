function myfunction()
    {
        var x=document.getElementById("myInput");
        if(x.type==="password")
        {
            x.type="text";
        }
        else
        {
            x.type="password"
        }
    }
    function signup(event)
    {
        event.preventDefault();
        let er1=document.getElementById("verify");
    let er2=document.getElementById("tryagain");
    let email=document.getElementById("email_input").value;
    let pass=document.getElementById("myInput").value;
    let logindata=JSON.parse(localStorage.getItem("login-details"));
    let flag=false;
        for(let i=0;i<logindata.length;i++)
        {
            let m=logindata[i].email;
            let p=logindata[i].password;
            if(email==m&&pass==p)
            {
                flag=true;
                break;
            }
            else if(email!=m&&pass!=p)
            {
                flag=false;
               
            }
        }
        if(flag==true)
    {
        alert("Login Successful!")
        window.location.href="./index.html";

    }
    else
    {
        let image=document.getElementById("warn");
        let img=document.createElement("img");
        img.src="https://cdn-icons-png.flaticon.com/128/179/179386.png";
        image.append(img);
        er1.innerText="Your Email or password wasn't Recognised";
        er2.innerText="Try Again";
    }
    }
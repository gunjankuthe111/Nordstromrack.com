function passemail()
{
    let email=document.getElementById("email").value;
    if(email!="")
    {
    let login_details=JSON.parse(localStorage.getItem("login-details"))||[];
    let N=login_details.length;
    let array=[];
    if(N==0)
    {
        array.push(email);
        localStorage.setItem("email",JSON.stringify(array));
        window.location.href="signup.html";
    }
    else
    {
        var flag=false;
        for(let i=0;i<N;i++)
        {
            let el=login_details[i].email;
            if(email==el)
            {
                flag=true;
                break;
            }
            else
            {
            flag=false;
            }   
         }
        if(flag==true)
        {
            window.location.href="signin.html";
        }
         else 
        {
            array.push(email);
            localStorage.setItem("email",JSON.stringify(array));
            window.location.href="signup.html";
        }
    }
}
else
    alert ("Enter email");
}
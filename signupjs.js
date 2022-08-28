let getmail=JSON.parse(localStorage.getItem("email"));
    let mail=getmail[0];
    document.getElementById("fetch").innerText=mail;
    let login_details=JSON.parse(localStorage.getItem("login-details"))||[];
    function signup(event)
    {
        event.preventDefault()
        let obj={   
         firstname:document.getElementById("firstname").value,
         lastname:document.getElementById("lastname").value,
         password:document.getElementById("password").value,
         email:mail,
        }
        if(obj.firstname!=""&&obj.lastname!=""&&obj.password!="")
        {
            login_details.push(obj);
            localStorage.setItem("login-details",JSON.stringify(login_details));
            alert(`Signup Successful ${obj.firstname}`);
            window.location.href="signin.html";
        }
        else if(obj.firstname=="")
        {
            alert ("Enter first name")
        }
        else if(obj.lastname=="")
        {
            alert ("Enter last name")
        }
        else if(obj.password=="")
        alert ("Enter password");
    }
    // signup()
    function myfunction()
    {
        var x=document.getElementById("password");
        if(x.type==="password")
        {
            x.type="text";
        }
        else
        {
            x.type="password"
        }
    }
    function getPasswordStrength(password){
      let s = 0;
      if(password.length > 6){
       s++;
      }
      if(password.length > 10){
        s++;
      }
      if(/[A-Z]/.test(password)){
        s++;
      }
      if(/[0-9]/.test(password)){
        s++;
      }
      if(/[^A-Za-z0-9]/.test(password)){
        s++;
      }
      return s;
}
document.querySelector("#password").addEventListener("focus",function(){
  document.querySelector(".pw-strength").style.display = "block";
});
document.querySelector("#password").addEventListener("keyup",function(e){
  let password = e.target.value;
  let strength = getPasswordStrength(password);
  let passwordStrengthSpans = document.querySelectorAll(".pw-strength span");
  strength = Math.max(strength,1);
  passwordStrengthSpans[1].style.width = strength*20 + "%";
  if(strength < 2){
    passwordStrengthSpans[0].innerText = "Weak";
    passwordStrengthSpans[0].style.color = "#111";
    passwordStrengthSpans[1].style.background = "#d13636";
  } else if(strength >= 2 && strength <= 4){
    passwordStrengthSpans[0].innerText = "Medium";
    passwordStrengthSpans[0].style.color = "#111";
    passwordStrengthSpans[1].style.background = "#e6da44";
  } else {
    passwordStrengthSpans[0].innerText = "Strong";
    passwordStrengthSpans[0].style.color = "#fff";
    passwordStrengthSpans[1].style.background = "#20a820";
  }
});
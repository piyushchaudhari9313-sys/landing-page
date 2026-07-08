let ham=document.querySelector("#ham");
let navlinks=document.querySelector("#nav-links");
let links = document.querySelectorAll(".nav-links a");


ham.addEventListener("click",()=>{
    navlinks.classList.toggle("active");
})
 
links.forEach(link => {
    link.addEventListener("click", () => { 
        navlinks.classList.remove("active");
    });
});

let name=document.querySelector("#name");
let email=document.querySelector("#email");
let submit=document.querySelector(".Submit");
let message=document.querySelector("#message");
submit.addEventListener("click",()=>{
    if(name.value===""||email.value===""){
        alert("Please Enter Name & Email");
    }
    else{
        alert("Login Sucessfully");
    }
    name.value="";
    email.value="";
    message.value="";
})
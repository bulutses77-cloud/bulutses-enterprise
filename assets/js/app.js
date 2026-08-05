document.addEventListener("DOMContentLoaded",()=>{

const header=document.querySelector(".bs-header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.background="rgba(8,17,31,.95)";

}else{

header.style.background="rgba(8,17,31,.72)";

}

});

});
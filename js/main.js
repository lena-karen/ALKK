let navBar = document.getElementById("nav-bar");
let closeBtn = document.querySelector(".menu-close");
let headerMenu = document.querySelector(".header-menu");
let logo = document.querySelector(".logo-link");
let logoImg = document.getElementById("logo-id");
navBar.addEventListener("click", mouseHandler);
closeBtn.addEventListener("click", closeMenu);

window.addEventListener('resize', screenHandler);
function screenHandler(){
    if (window.innerWidth > 980){
        navBar.style.display = "none";
        logoImg.classList.remove("logo-img-wht");
        logoImg.classList.add("logo-img-blc");
        document.querySelector(".nav-menu").style.display = "flex";
        document.querySelector(".header-phone-block").style.display = "flex";
        document.querySelector(".context-menu").style.display = "flex";

        headerMenu.style.paddingTop = "0";
        document.querySelector(".header-background").style.marginTop = "0";

        headerMenu.style.width = "100%";
        headerMenu.style.paddingBottom = "0";
        logo.style.marginLeft = "130px";
        document.querySelector(".header-phone-block").style.paddingRight = "130px";
        document.querySelector(".header-phone-block").style.paddingTop = "20px";
        headerMenu.style.background = "linear-gradient(0deg, #F5F7F9, #F5F7F9), #ECE8E5";
    } else {
        navBar.style.display = "block";
        document.querySelector(".nav-menu").style.display = "none";
        document.querySelector(".header-phone-block").style.display = "none";
        document.querySelector(".context-menu").style.display = "none";
        headerMenu.style.paddingBottom = "20px";
        document.querySelector(".header-background").style.marginTop = "0";
        logo.style.marginLeft = "20px";
      
    }
}
    
function mouseHandler(){
    
    let navBar = document.querySelector(".nav-bar");
    document.querySelector(".menu-close").style.display = "block";
    navBar.style.display = "none";
  
    headerMenu.style.width = "100vw";
    headerMenu.style.position = "absolute";
  //  headerMenu.style.top = "-20px";
    headerMenu.style.left = "0";
    headerMenu.style.paddingRight = "20px";
    headerMenu.style.paddingBottom = "0";
    headerMenu.style.background = "#333333";
    document.querySelector(".header-phone-viber-link").style.marginRight = "0";
    logoImg.classList.add("logo-img-wht");
    logoImg.classList.remove("logo-img-blc");
    document.querySelector(".header-phone-block").style.paddingBottom = "20px";
    document.querySelector(".logo-text").style.color = "white";
    document.querySelector(".nav-menu").style.display = "flex";
    document.querySelector(".header-phone-block").style.display = "flex";
    document.querySelector(".header-phone-block").style.paddingTop = "0";
    document.querySelector(".header-phone-block").style.paddingRight = "0";
    document.querySelector(".context-menu").style.display = "flex";
}
function closeMenu(){
    closeBtn.style.display = "none";
    
    logo.style.display = "flex";
    document.querySelector(".nav-menu").style.display = "none";
    document.querySelector(".header-phone-block").style.display = "none";
    document.querySelector(".header-phone-block").style.paddingBottom = "0";
    document.querySelector(".context-menu").style.display = "none";
  
    headerMenu.style.paddingRight = "0";
    logoImg.classList.remove("logo-img-wht");
    logoImg.classList.add("logo-img-blc");

    logo.classList.remove("logo-link-nav-bar");
    logo.classList.add("logo-link");
    headerMenu.style.backgroundColor = "white";
    headerMenu.style.position = "static";
    navBar.style.display = "flex";
    document.querySelector(".logo-text").style.color = "black";
    document.querySelector(".header-phone-viber-link").style.paddingRight = "12px";
    document.querySelector(".header-background").style.marginTop = "20px";
}

let dropdownMenu = document.getElementsByClassName("dropdown-list");
let dropdownArrow = document.getElementsByClassName("dropdown-arrow");

for (let i = 0; i < dropdownArrow.length; i++){
    dropdownArrow[i].addEventListener('click', () => dropdownHandler(dropdownArrow[i], i));
}

function dropdownHandler(element, index){
    
        element.stopPropagation;
        dropdownMenu[index].classList.toggle("list-visible");
        element.classList.toggle("dropdown-open");
        document.querySelectorAll(".dropdown-type")[index].classList.toggle("dropdown-opacity");
    }
 
   
document.addEventListener("click", function(event){
    for (let i = 0; i < dropdownArrow.length; i++){
        if (event.target!=dropdownArrow[i] && 
            dropdownMenu[i].classList.contains("list-visible")){
            dropdownMenu[i].classList.toggle("list-visible");
            dropdownArrow[i].classList.toggle("dropdown-open");
            document.querySelectorAll(".dropdown-type")[index].classList.toggle("dropdown-opacity");
        }
    }
    
});

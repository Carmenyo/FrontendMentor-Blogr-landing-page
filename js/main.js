"use strict";

// Constantes
const hamburgerIcon = document.getElementById("hamburgerIcon");
const header = document.getElementById("header");

const navLinks = document.querySelectorAll(".js-navLink");
console.log(navLinks)

// Funcionalidad menú Hamburguesa
hamburgerIcon.addEventListener("click", () =>{
    header.classList.toggle ("active");
});

//Funcionalidad menú links

navLinks.forEach(function(nav){
nav.addEventListener("click", function() {
    // console.log(this);
    this.classList.toggle ("open");

    if (nav.classList.contains("open")){
        navLinks.forEach(function(nav){
            nav.classList.remove("open");
        });
        nav.classList.toggle ("open");
    }
});
 });
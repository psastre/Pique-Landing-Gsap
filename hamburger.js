const navSlide = () => {
    const burger = document.querySelector(".menu-container");
    const burgerLines = document.querySelector(".menu");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    const menuBlock = document.querySelector(".menu-block");
    const social = document.querySelector(".social-container");
  
    burger.addEventListener("click", () => {
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
          });
      menuBlock.classList.toggle("menu-block-after");
      burgerLines.classList.toggle("menu-white");
      social.classList.toggle("social-container-white");
      console.log('hola');
      
    });
  
   
  };
  
  navSlide();
 var typed = new Typed('#element', {
      strings: [  'Frontend Developer','UI/UX Desingner','Web Developer'],
      typeSpeed: 70,
      backSpeed:70,
      loop: true,
    });

// const openmenu =document.getElementById("open")
// const closemenu =document.getElementById("close")
// const mobilemenu =document.getElementById("menus")

// const menuicon =document.getElementById("menuicon")

// openmenu.addEventListener("click", function(){
//   closemenu.style.display="block"
//   openmenu.style.display="none"
//   mobilemenu.style.display="block"
// })
// closemenu.addEventListener("click", function(){
//   openmenu.style.display="block"
//   closemenu.style.display="none"
//   mobilemenu.style.display="none"
// })

// menuicon.addEventListener("click",function(){
//   mobilemenu.style.display="none"
//    openmenu.style.display="block"
//     closemenu.style.display="none"
// })


// const menus =document.getElementById("menus")
// const close =document.getElementById("close")
// const open =document.getElementById("open")

// const menuicon =document.getElementById("menuicon")
// const menuicon1 =document.getElementById("menuicon1")
// const menuicon2 =document.getElementById("menuicon2")
// const menuicon3 =document.getElementById("menuicon3")

// function openmenu(){
// menus.style.right="0"
// close.style.display ="block"
// open.style.display ="none"
// }

// function closemenu(){
//   menus.style.right="-50%"
//   close.style.display ="none"
//   open.style.display ="block"
// }

// const mobile = window.matchMedia("(max-width: 767px)");
// const tablet = window.matchMedia("(min-width: 768px) and (max-width: 1024px)");


// mobile.addEventListener("change", (e) => {
  

// menuicon.addEventListener("click",function(){
//  menus.style.right="-50%"
//  close.style.display ="none"
//   open.style.display ="block"
// })
// menuicon1.addEventListener("click",function(){
//  menus.style.right="-50%"
//  close.style.display ="none"
//   open.style.display ="block"
// })
// menuicon2.addEventListener("click",function(){
//  menus.style.right="-50%"
//  close.style.display ="none"
//   open.style.display ="block"
// })
// menuicon3.addEventListener("click",function(){
//  menus.style.right="-50%"
//  close.style.display ="none"
//   open.style.display ="block"
// })





// });





const menus = document.getElementById("menus");
const close = document.getElementById("close");
const open = document.getElementById("open");

const menuItems = [
  document.getElementById("menuicon"),
  document.getElementById("menuicon1"),
  document.getElementById("menuicon2"),
  document.getElementById("menuicon3")
];

function openmenu() {
  menus.style.right = "0";
  close.style.display = "block";
  open.style.display = "none";
}

function closemenu() {
  menus.style.right = "-50%";
  close.style.display = "none";
  open.style.display = "block";
}

// Hide menu on item click (for mobile)
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      closemenu();
    }
  });
});

// Handle navbar display based on screen size
function handleResponsiveNavbar(e) {
  if (e.matches) {
    // Screen is less than or equal to 768px (mobile)
    menus.style.right = "-50%";
    open.style.display = "block";
    close.style.display = "none";
  } else {
    // Desktop view
    menus.style.right = "0";
    open.style.display = "none";
    close.style.display = "none";
  }
}

// Initial check on page load
const mediaQuery = window.matchMedia("(max-width: 768px)");
handleResponsiveNavbar(mediaQuery);

// Listen for screen size changes
mediaQuery.addEventListener("change", handleResponsiveNavbar);



const preloader =document.getElementById("preloader")

window.addEventListener("load" , function(){
  preloader.style.display="none"
})




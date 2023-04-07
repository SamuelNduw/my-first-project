function myFunction(){
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.slider-btn');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn)=> {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

//Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('slider-btn');
  let active1 = document.getElementsByClassName('slide');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });
      [...active1].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;
    
    if(slides.length == i){
      i =0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
    },7000);
  }
  repeater();
}
repeat();

// let hearts = document.querySelectorAll('#heart1, #heart2, #heart3, #heart4')

// for(let heart of hearts){
//   heart.onclick = function(){
//     if(heart.style.color == 'red'){
//       heart.style.color = 'white'
//     } 
//     else{
//       heart.style.color = 'red'
//     };
//   ;}  
// };

// let heart_cart = document.querySelector('g1_downfav');

// heart_cart.addEventListener("mouseover", () => {
//   heart_cart.style.display = visible;
// });

// let stars = document.querySelectorAll('#star1, #star2, #star3, #star4, #star5')

// for(let star of stars){
//   star.onclick = function(){
//     if(star.style.color == 'white'){
//       star.style.color ='yellow'
//     }
//     else{
//       star.style.color ='white'
//     }
//   }
// }

// Sign Up modal
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// Product Slider
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.previous-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth/1.5;
  })

  preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth/1.5;
  })
})

// Navbar toggles
const navUl = document.querySelector('#navUl');
const closeButton = document.querySelector('.close-button-nav');
const checkbox = document.querySelector('.checkbtn');

closeButton.onclick = function closeButton(){
    navUl.style.left = "-100%";
    checkbox.checked = false;
    checkbox.style.scale = '1'
}
checkbox.onclick = function openButton(){
    if(navUl.style.left = "-100%"){
    navUl.style.left = "-20%";
    checkbox.checked = true;
    checkbox.style.scale = '0'
    }
}
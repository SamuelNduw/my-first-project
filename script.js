// Modal for Sign Up
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



// Toggle Password
function myFunction(){
  var x = document.getElementById("passwordInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


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
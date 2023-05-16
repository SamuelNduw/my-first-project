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

// Toggle Password
function myFunction(){
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

// Form Validation
const form = document.querySelector('#contactForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit')


form.addEventListener('submit', function(event){
  event.preventDefault();

  // Check for Empty input fields
  if(nameInput.value === ''){
    invalidColor(nameInput)
  }
  if(emailInput.value === ''){
    invalidColor(emailInput)
  }
  if(messageInput.value === ''){
    invalidColor(messageInput)
  }

  // Improve this part of the code!!!

  if(!validateEmail(emailInput)){   //(event.target.value)
    window.alert('Invalid Email address!');
    invalidColor(emailInput);
  }

  // Error message
  errorMessage()

  emailInput.addEventListener('blur', function(event) {
    if(!validateEmail(event.target.value)){
      window.alert('Invalid Email address!');
    }
  })

})

document.addEventListener('click', function(event) {
  if (!form.contains(event.target)) {
    if(nameInput.style.border === '2px solid red' || emailInput.style.border == '2px solid red' || messageInput.style.border == '2px solid red'){
      validColor(nameInput);
      validColor(emailInput);
      validColor(messageInput);
    }
    
  }
});

function invalidColor(inputType){
  inputType.style.border = '2px solid red';
}

function validColor(inputType){
  inputType.style.border = '2px solid #ccc'
}

function errorMessage(){
  let nameValue = nameInput.value;
  let emailValue = emailInput.value;
  let messageValue = messageInput.value;

  if(nameValue === '' && emailValue === '' && messageValue === ''){
    window.alert('Please fill in the name, email and message fields!')
  }
  else if(nameValue === '' && emailValue === ''){
    window.alert('Please fill in the name and email fields!')
  }
  else if(nameValue === '' && messageValue === ''){
    window.alert('Please fill in the name and message fields!')
  }
  else if(emailValue === '' && messageValue === ''){
    window.alert('Please fill in the email and message fields!')
  }
  else if(nameValue === ''){
    window.alert('Please fill in the name field!')
  }
  else if(emailValue === ''){
    window.alert('Please fill in the email field!')
  }
  else if(messageValue === ''){
    window.alert('Please fill in the message field!')
  }
  else{
    console.log('no error')
  }
}

function validateEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
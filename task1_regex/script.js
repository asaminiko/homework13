const numberInput = document.getElementById('phone')
const emailInput = document.getElementById('email')
const nameInput = document.getElementById('name')
const messageInput = document.getElementById('message')
const regexNumber = /^\+380\d{9}$/
const regexName = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const myForm = document.getElementById('myForm')
const phoneError = document.getElementById('phoneError')
const emailError = document.getElementById('emailError')
const nameError = document.getElementById('nameError')
myForm.addEventListener('submit', function (event) {
  event.preventDefault()
  let isValid = true
  const phoneValue = numberInput.value.trim()
  const emailValue = emailInput.value.trim()
  const nameValue = nameInput.value.trim()
  const messageValue = messageInput.value.trim()

  if (!regexNumber.test(phoneValue)) {
    isValid = false
    phoneError.textContent = 'Некоректний номер телефону'
  } else {
    phoneError.textContent = ''
  }
  if (!regexName.test(nameValue)) {
    isValid = false
    nameError.textContent = "Некоректне ім'я"
  } else {
    nameError.textContent = ''
  }
  if (!regexEmail.test(emailValue)) {
    isValid = false
    emailError.textContent = 'Некоректний email'
  } else {
    emailError.textContent = ''
  }
  if (!isValid) {
    return
  }
  if (isValid) {
    console.log(nameValue, messageValue, phoneValue, emailValue)
  }
})

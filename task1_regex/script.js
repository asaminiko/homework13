const numberInput = document.getElementById('phone')
const emailInput = document.getElementById('email')
const nameInput = document.getElementById('name')
const messageInput = document.getElementById('message')
const regexNumber = /^\+380\d{9}$/
const regexPoint = /\./
const myForm = document.getElementById('myForm')
const phoneError = document.getElementById('phoneError')
const emailError = document.getElementById('emailError')
myForm.addEventListener('submit', function (event) {
  let isValid = true
  const phoneValue = numberInput.value.trim()
  const emailValue = emailInput.value.trim()
  const nameValue = nameInput.value.trim()
  const messageValue = messageInput.value.trim()
  if (!regexNumber.test(phoneValue)) {
    event.preventDefault()
    isValid = false
    phoneError.textContent = 'номер телефону має містити +380 та 9 цифр'
  } else {
    phoneError.textContent = ''
  }

  if (!regexPoint.test(emailValue)) {
    event.preventDefault()
    isValid = false
    emailError.textContent = 'email має містити одну точку'
  } else {
    emailError.textContent = ''
  }
  if (!isValid) {
    event.preventDefault()
    return
  }
  if (isValid) {
    event.preventDefault()
    console.log(nameValue, messageValue, phoneValue, emailValue)
  }
})

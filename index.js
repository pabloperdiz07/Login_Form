const email = document.querySelector('#email')
const password = document.querySelector('#password')

const mailIcon = document.querySelector('#mailIcon')
const mailIconFocus = document.querySelector('#mailIconFocus')

const lockIcon = document.querySelector('#lockIcon')
const lockIconFocus = document.querySelector('#lockIconFocus')

email.addEventListener('focus', function(){
    mailIcon.classList.toggle('hidden')
    mailIconFocus.classList.toggle('hidden')
})

email.addEventListener('blur', function(){
    mailIcon.classList.toggle('hidden')
    mailIconFocus.classList.toggle('hidden')
})

password.addEventListener('focus', function(){
    lockIcon.classList.toggle('hidden')
    lockIconFocus.classList.toggle('hidden')
})

password.addEventListener('blur', function(){
    lockIcon.classList.toggle('hidden')
    lockIconFocus.classList.toggle('hidden')
})
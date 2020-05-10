// Users data
const initData = [
  {
    userName: 'sang',
    password: 'sang123',
    email: 'sang@gmail.com'
  },
  {
    userName: 'nguyen',
    password: 'nguyen123',
    email: 'nguyen@gmail.com'
  }
]

// Reload localStorage value
window.onload = function() {
  window.localStorage.clear()
  window.localStorage.setItem('usersData', JSON.stringify(initData))
}

// Login
function toLogin() {
  const user = document.querySelector('#user').value
  const pass = document.querySelector('#password').value

  const storedUsers = JSON.parse(localStorage.getItem('usersData'))
  const checkUsers = storedUsers.find(({ userName, password }) => (user === userName && pass === password))
  if (checkUsers) {
    document.querySelector('.login-container').setAttribute('style', 'display: none')
    document.querySelector('.login-success').setAttribute('style', 'display: block')
  }
}

// Create new User Data
function toCreate() {
  const userName = document.querySelector('#sign-user').value
  const password = document.querySelector('#sign-password').value
  const email = document.querySelector('#sign-email').value

  const newData = [...initData, {
    userName,
    password,
    email,
  }]
  window.localStorage.setItem('usersData', JSON.stringify(newData))
  
  document.querySelector('.login-container').setAttribute('style', 'display: block')
  document.querySelector('.register-container').setAttribute('style', 'display: none')
}

// Logout when Login successed
function toLogout() {
  document.querySelector('.login-container').setAttribute('style', 'display: block')
  document.querySelector('.login-success').setAttribute('style', 'display: none')
}

// Go to Register Form
function toRegister() {
  document.querySelector('.login-container').setAttribute('style', 'display: none')
  document.querySelector('.register-container').setAttribute('style', 'display: block')
}

// Comeback Login Form
function toCancel() {
  document.querySelector('.login-container').setAttribute('style', 'display: block')
  document.querySelector('.register-container').setAttribute('style', 'display: none')
}
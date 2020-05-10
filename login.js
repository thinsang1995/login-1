let objUser = [
    {
        username: 'sang',
        password: 'sang123'
    },
    {
        username: 'nguyen',
        password: 'nguyen123'
    }
]

window.onload = function() {
    if(localStorage) {
        localStorage.setItem('#user', JSON.stringify(objUser.map(a => a.username)))
        localStorage.setItem('#pass', JSON.stringify(objUser.map(a => a.password)))
    }
}

function toLogin() {
    let user = document.querySelector('#user')
    let pass = document.querySelector('#pass')

    let storedUser = JSON.parse(localStorage.getItem('#user')) 
    let storedPass = JSON.parse(localStorage.getItem('#pass'))
    
    for (let i=0; i<storedUser.length; i++) {
        if(user.value === storedUser[i] && pass.value === storedPass[i]) {
            alert('Login Successful')
            window.location.href = 'myaccount.html'
            return
        } else if(user.value ==='' || pass.value ==='') {
            alert('ERROR')
            return
        } alert('ERROR')
            return
    }


}
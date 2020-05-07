function signup(form, email, password) {
    let signupEmail = email
    let signupPw = password
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function (){
        if (this.readyState === 4) {
            if (xhr.responseText === "registered"){
                alert("this email has been registered, please try another!")
            } else if (xhr.responseText === "not registered") {
                console.log('posted')
                form.submit()
            }
        }
    }
    xhr.open('POST', 'signup', true)
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send(`signupEmail=${signupEmail}&signupPw=${signupPw}&xhr=true`)
}

function signin(form, email, password) {
    let signinEmail = email
    let signinPw = password
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function (){
        if (this.readyState === 4) {
            if (xhr.responseText === "wrong"){
                alert("wrong email or password, please try again")
            } else if (xhr.responseText === "matched") {
                console.log('posted')
                form.submit()
            }
        }
    }
    xhr.open('POST', 'signin', true)
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send(`signinEmail=${signinEmail}&signinPw=${signinPw}&xhr=true`)
}

function signupValidate(event) {
    event.preventDefault()
    let form = document.forms[0]
    let email = document.forms[0].childNodes[1].value
    let password = document.forms[0].childNodes[2].value
    let filled = email != '' && password != ''
    if (filled === false){
            alert('please fill the blank')
        } else {
            signup(form, email, password)
        }
}

function signinValidate(event) {
    event.preventDefault()
    let form = document.forms[1]
    let email = document.forms[1].childNodes[1].value
    let password = document.forms[1].childNodes[2].value
    let filled = email != '' && password != ''
    if (filled === false){
            alert('please fill the blank')
        } else {
            signin(form, email, password)
        }
}

function signup(event) {
    let signupEmail = event.target.childNodes[1].value
    let signupPw = event.target.childNodes[2].value
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function (){
        if (this.readyState === 4) {
            if (xhr.resonseText === "true"){
                alert("this email has been registered, please try another!")
                return true
            } else {
                return false
            }
            //console.log(xhr.responseText)
            //return(xhr.responseText)
        }
    }
    xhr.open('POST', 'signup', false)
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send(`signupEmail=${signupEmail}&signupPw=${signupPw}`)
}

function signin() {
    let signinForm = document.getElementById('signin')
    
    //let signinEmail = document.getElementById('signinEmail').value
    //let signinPw = document.getElementById('signinPw').value
    //let xhr = new XMLHttpRequest()
    //xhr.onreadystatechange = function (){
        //if (this.readyState === 4) {
            //let response = JSON.parse(this.responseText)
            //location.assign(response.site+"?greetings="+response.greetings)
        //}
    //}
    //xhr.open('GET', signinBase+'email='+signinEmail+'&password='+signinPw, true)
    //location.assign(signinBase+'email='+signinEmail+'&password='+signinPw)
    //xhr.send()
}

function validate(event) {
    let filled = event.target.childNodes[1].value != '' && event.target.childNodes[2].value != ''
    //event.preventDefault()
    if (filled === false){
            alert('please fill the blank')
            return false
        } else {
            //return signup(event)
            return true
        }
}

 const resultsList = document.getElementById('results')
 new URLSearchParams(window.location.search).forEach((value, name) => {
     resultsList.append(`${name}: ${value}`)
     resultsList.append(document.createElement('br'))
 })

var name = document.getElementById('name');
var loginform = document.getElementById('login-form');
var usernameErrPara = document.getElementById('username-err');

username.addEventListener('input', function(e){
    var pattern = /^[\w]{6,10}$/;
    var currentValue = e.target.value;
    var valid =pattern.test(currentValue);

    if(valid) {
        usernameErrPara.style.display = 'none'
    } else{
        usernameErrPara.style.display = 'block'
    }
})


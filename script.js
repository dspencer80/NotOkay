   const resultsList = document.getElementById('results')
   new URLSearchParams(window.location.search).forEach((value, name) => {
      resultsList.append(`${name}: ${value}`)
       resultsList.append(document.createElement('br'))
       console.log(resultsList);
   })

var name = document.getElementById('name');
var loginform = document.getElementById('login-form');
var numberErrPara = document.getElementById('number-err');

number.addEventListener('input', function(e){
    var pattern = /^[\w]{10,10}$/;
    var currentValue = e.target.value;
    var valid =pattern.test(currentValue);

    if(valid) {
        numberErrPara.style.display = 'none'
    } else{
        numberErrPara.style.display = 'block'
    }
})


     
    
    
    
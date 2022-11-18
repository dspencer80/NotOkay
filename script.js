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



// const storageInput = document.querySelector('.storage');
// const text = document.querySelector('.text');
// const button = document.querySelector('.button');

//  storageInput.addEventListener('input', letter =>{
//     text.textContent = letter.target.value
    
//  })

//  const saveToLocalStorage = () => {
//     localStorage.setItem('textinput', text.textContent)
//  }

//  button.addEventListener('click', saveToLocalStorage)
//  const savedFriends = localStorage.getItem(savedFriends);

//  function save(){
//      const Friend = document.getElementById("name").value;
//      localStorage.setFriend("storedFriend", Friend);
//      document.getElementById("savedFriend").innerHTML = friend + "SAVED";

//  }

//  function get(){
//      localStorage.getFriend("storedFriend");
//      document.getElementById("openedText").innerHTML = storedFriend + "OPENED";
//  }

//  const friends = [];

//   const addFriend = (ev)=>{
//       ev.preventDefault();
//       let friend = {
//           id: Date.now(),
//           name: document.getElementById('name').value,
//           number: document.getElementById('number').value
//        }
//        friends.push(friend);
//        document.querySelector('form').reset();
      

//        console.warn('added' , {friends} );
//        let pre = document.querySelector('#msg pre');
//        pre.textContent = '\n' + JSON.stringify(friends, '\t' , 2);

//        document.addEventListener('DOMContentLoaded' , ()=>{
//           document.getElementById('btn').addEventListener('click', addFriend);
//        });

     
    
    
    
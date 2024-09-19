
// step - 1 set event handler
// document.getElementById('login-button').addEventListener('click', function(event){
//     // step - 2 prevent default behavior (prevent reloading browser)
//     event.preventDefault();  //---vejal to beginners

//     // step - 3 get the phone number and the pin number
//     let phoneNumber = document.getElementById('phone-number').value ;
//     let pinNumber = document.getElementById('pin-number').value ;
//     console.log(phoneNumber,pinNumber);
    
//     // step - 4 validate phone and pin 
//     // this is temporary . You should do like this
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('You are logged in');
//         // step - 5 allow user to use the website
//     }
//     else{
//         alert('Wrong phone number or pin')
//     }
// })


document.getElementById('login-button')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log('hello my dear');

    let phoneNumber = document.getElementById('phone-number').value
    let pinNumber = document.getElementById('pin-number').value
    console.log(phoneNumber, pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('Logged this account');
        window.location.href = '/home.html'
    }
    else{
        alert('Wrong this phone number and pin')
    }
});
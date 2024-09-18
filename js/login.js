
// step - 1 set event handler
document.getElementById('login-button').addEventListener('click', function(event){
    // step - 2 prevent default behavior (prevent reloading browser)
    event.preventDefault  //---vejal to beginners
    console.log('login button click');

    // step - 3 get the phone number
    let phoneNumber = document.getElementById('phone-number').value ;
    console.log(phoneNumber);
})
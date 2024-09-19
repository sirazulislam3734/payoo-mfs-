// add money to the account

// step: 1 add an event handler to the add moneybtn iside the form
document.getElementById('add-money-btn').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // step-2 get money to be added to the account
    let inputAddMoney = document.getElementById('input-add-money').value ;
    console.log(inputAddMoney);
    let inputPin = document.getElementById('input-pin').value ;
    console.log(inputPin);
         })
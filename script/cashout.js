// 1: Get the Agent Number & Validate:
// 2: Get the Amount > validate > convert to Number:
// 3: Get Current Balance > validate > convert to Number:
// 4: Calculate new Balance:
// 5: Get the pin and Verify:
// 5.1: true :: show an alert > set Balance.
// 5.2: false :: show an error alert > return.

// Messive to Some:

document.getElementById('cashout-btn').addEventListener('click', function(){

    const cashoutNumber = getValueFromInput('cashout-number');
    
    if(cashoutNumber.length != 11){
        alert('Invalid Agent Number')
        return;
    }
    
    const cashoutAmount = getValueFromInput('cashout-amount');

    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(cashoutAmount);

    if(newBalance < 0){
        alert('Invalid Amount')
        return;
    }

    const pin = getValueFromInput('cashout-pin');

    if(pin === '1234'){
        alert('Cashout Successfull');
        setBalance(newBalance);

        // Remove Data After Clicked.
        document.getElementById('cashout-number').value = '';
        document.getElementById('cashout-amount').value = '';
        document.getElementById('cashout-pin').value = '';

        // Cashout History:
        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
        <div class="transctions-card p-5 bg-base-100">
            Cashout ${cashoutAmount} TK Success to ${cashoutNumber} , at ${new Date()}
        </div>
        `;

        history.append(newHistory);

    }
    else{
        alert('Invalid PIN')
        return;
    }
});

// Press Enter to Work it:
document.getElementById('cashout-pin').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('cashout-btn').click();
    }
});

// Messive Code:

/*
document.getElementById('cashout-btn').addEventListener('click', function(){
    // console.log('Clicked.');

    const cashoutNumberInput = document.getElementById('cashout-number');
    // console.log(cashoutNumberInput);
    const cashoutNumber = cashoutNumberInput.value;
    // console.log(cashoutNumber);

    if(cashoutNumber.length != 11){
        alert('Invalid Agent Number');
        return;
    }
    
    const cashoutAmountInput = document.getElementById('cashout-amount');
    // console.log(cashoutAmountInput);
    const cashoutAmount = cashoutAmountInput.value;
    // console.log(cashoutAmount);
    
    const currentBalanceNow = document.getElementById('current-balance');
    // console.log(currentBalanceNow);
    const currentBalance = currentBalanceNow.innerText;
    // console.log(currentBalance);

    const newBalance = Number(currentBalance) - Number(cashoutAmount);
    // console.log(newBalance);
    if (newBalance < 0) {
        alert ('Invalid Amount');
        return;
    }
    // console.log(newBalance);
    
    const cashoutPinInput = document.getElementById('cashout-pin');
    // console.log(cashoutPinInput);
    const pin = cashoutPinInput.value;
    // console.log(pin);
    if(pin === "1234") {
        alert('Cashout Successfull');

        currentBalanceNow.innerText = newBalance;
    }
    else{
        alert('Invalid PIN');
        return;
    }
});
*/



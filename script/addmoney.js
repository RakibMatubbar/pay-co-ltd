// Code for addmoney:

// 1: Get Bank Account.
// 2: Get Bank Account Number.
// 3: Get Amount.
// 4: Get PIN.
// 5: Set Balance.

// Code for History:

// 1: Get history-container.
// 2: Create New div.
// 3: Add innerHTML to new div.
// 4: Append new div to history-container.

document.getElementById('add-money-btn').addEventListener('click', function(){
    // console.log('Clicked.');

    const bankAccount = getValueFromInput('add-money-bank');
    // console.log(bankAccount);
    if(bankAccount === 'Pick A Bank'){
        alert('Please selecte a Bank');
        return;
    }

    const accountNumber = getValueFromInput('add-money-number');
    // console.log(accountNumber);
    if(accountNumber.length != 11){
        alert('Invalid A/C No');
        return;
    }

    const amountToAdd = getValueFromInput('add-money-amount');
    // console.log(amountToAdd);

    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amountToAdd);
    // console.log(newBalance);
    
    const getPin = getValueFromInput('add-money-pin');
    // console.log(getPin);
    if(getPin == '1234'){
        // alert('Add Money Success');
        // Another way intersting:
        alert(`Add Money Success from ${bankAccount} , A/C No ${accountNumber} at ${new Date()}`)

        setBalance(newBalance);

        // Remove Data After Clicked.
        document.getElementById('add-money-bank').value = 'Pick A Bank';
        document.getElementById('add-money-number').value = '';
        document.getElementById('add-money-amount').value = '';
        document.getElementById('add-money-pin').value = '';

        // Transctions History:
        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
        <div class="transctions-card p-5 bg-base-100">
            Add Money Success from ${bankAccount} A/C No. ${accountNumber} at ${new Date()}
        </div>
        `;

        history.append(newHistory);

    }
    else{
        alert('Invalid Pin');
        return;
    }
});

// Press Enter to Work it:
document.getElementById('add-money-pin').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('add-money-btn').click();
    }
});



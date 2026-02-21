// 1: Get Sent now btn.
// 2: Get user account Number.
// 3: Get amount to transfer.
// 4: Get PIN.

document.getElementById('transfer-btn').addEventListener('click', function(){
    // console.log('Clicked.');

    const accountNumber = getValueFromInput('transfer-number');
    // console.log(accountNumber);
     if(accountNumber.length != 11){
        alert('Invalid User Number');
        return;
    }
    
    const amountToTransfer = getValueFromInput('transfer-amount');
    // console.log(amountToTransfer);
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amountToTransfer);
    // console.log(newBalance);

    if(newBalance < 0){
        alert('Invalid Amount')
        return;
    }

    const pinCode = getValueFromInput('transfer-pin');
    // console.log(pinCode);

    if(pinCode === '1234'){
        alert('Transfer Money Successfull');
        setBalance(newBalance);

        // Remove Data After Clicked.
        document.getElementById('transfer-number').value = '';
        document.getElementById('transfer-amount').value = '';
        document.getElementById('transfer-pin').value = '';

        // Cashout History:
        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
        <div class="transctions-card p-5 bg-base-100">
            Transfer ${amountToTransfer} TK Success to ${accountNumber} , at ${new Date()}
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
document.getElementById('transfer-pin').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('transfer-btn').click();
    }
});



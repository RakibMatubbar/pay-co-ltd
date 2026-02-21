// 1: Get pay now btn.
// 2: Verify it's selected or not: pick one.
// 3: Get Biller A/C no.
// 4: Get amout to pay.
// 5: Get PIN.


document.getElementById('pay-btn').addEventListener('click', function(){
    // console.log('Clicked.');

    const payBill = getValueFromInput('bill-pay');
    // console.log(payBill);
    if(payBill === 'Pick One'){
        alert('Please Select One');
        return;
    }

    const BillerNumber = getValueFromInput('biller-number');
    // console.log(BillerNumber);
    if(BillerNumber.length != 11){
        alert('Invalid A/C No');
        return;
    }

    const amountToPay = getValueFromInput('bill-amount');
    // console.log(amountToPay);

    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(amountToPay);
    // console.log(newBalance);
    
    const getPinCode = getValueFromInput('bill-pin');
    // console.log(getPinCode);

    if(getPinCode == '1234'){
        alert('Pay Bill Success');

        setBalance(newBalance);

        // Remove Data After Clicked.
        document.getElementById('bill-pay').value = 'Pick One';
        document.getElementById('biller-number').value = '';
        document.getElementById('bill-amount').value = '';
        document.getElementById('bill-pin').value = '';

        // Transctions History:
        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
        <div class="transctions-card p-5 bg-base-100">
            Pay Bill ${amountToPay} TK Success from My A/C to > A/C No. ${BillerNumber} at ${new Date()}
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
document.getElementById('bill-pin').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('pay-btn').click();
    }
});



// 1: Get Get Bonus Btn.
// 2: Get Coupon input field.
// 3: Add bonus to current amount.

document.getElementById('bonus-btn').addEventListener('click', function(){
    // console.log('Clicked.');
    
    const bonusCoupon = getValueFromInput('bonus-amount');
    // console.log(bonusCoupon);

    const currentBalance = getBalance();
    const newBalance = currentBalance + 500;

    if(bonusCoupon == '1234' && bonusCoupon !== ''){
        alert('You get 500 TK');
        
        setBalance(newBalance);
        // Remove Data After Clicked.
        document.getElementById('bonus-amount').value = '';
  
        // Cashout History:
        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
        <div class="transctions-card p-5 bg-base-100">
            You get ${500} TK from Coupon , at ${new Date()}
        </div>
        `;

        history.append(newHistory);

    }
    else{
        alert('Wrong Coupon')
    }

});

// Press Enter to Work it:
document.getElementById('bonus-amount').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('bonus-btn').click();
    }
});



// For same work: machine id -> input value: Reduce Code:

// For input field:
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// For Current Blance:
function getBalance(){
    const currentBlanceNow = document.getElementById('current-balance');
    const currentBalance = currentBlanceNow.innerText;
    console.log(Number(currentBalance));
    return Number(currentBalance);
}

// Set Balance:
function setBalance(value){
    const currentBlanceNow = document.getElementById('current-balance');
    currentBlanceNow.innerText = value;
}

// Show one card | Hide all:
function showOnly(id){

    // Get the id:
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');
    const transferMoney = document.getElementById('transfer-money');
    const GetBonus = document.getElementById('get-bonus');
    const PayBill = document.getElementById('pay-bill');
    const TransacTions = document.getElementById('history');
    const latestHistory = document.getElementById('Latest');
    
    // Hidden the id:
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    transferMoney.classList.add('hidden');
    GetBonus.classList.add('hidden');
    PayBill.classList.add('hidden');
    TransacTions.classList.add('hidden');
    latestHistory.classList.add('hidden');

    // Remove hidden | which clicked:
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}



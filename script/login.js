// 1: Get the mobile Number.
// 2: Get the PIN.
// 3: Match the Value.
// 3.1: true : alart > Homepage. 
// [use: window.location.replace] replace Use করলে পূর্বের History রাখেনা তাই Arrow Click করে Back করা যায়না। কিন্তু: assign Use করলে History Save রাখে।
// 3.2: false : alart > Return.

document.getElementById('login-btn').addEventListener('click', function(){
    // console.log('Btn Clicked.')

    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    // console.log(contactNumber);

    const inputPin = document.getElementById('input-pin');
    const pinCode = inputPin.value;
    // console.log(pinCode);

    if (contactNumber == '01822965616' && pinCode == '1234') {
        // console.log('Login Success.');
        alert('Login Success.');

        // window.location.replace('/home.html')
        window.location.assign('home.html')
    }
    else {
        // console.log('Login Failed.');
        alert('Login Failed.');

        return;
    }
});

// Press Enter to Login:
document.getElementById('input-pin').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('login-btn').click();
    }
});



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

    if (contactNumber == '01800000000' && pinCode == '1234') {
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


// ১. মেইন Jobs Container থেকে ক্লিকের লজিক (Clone হবে)
document.getElementById('jobs-cards').addEventListener('click', function (event) {
    const card = event.target.closest('.job-card');
    const interviewBtn = event.target.closest('.interview-btn');
    const rejectedBtn = event.target.closest('.rejected-btn');

    if (!card) return;

    if (interviewBtn) {
        // স্ট্যাটাস ও স্টাইল আপডেট
        updateCardUI(card, 'INTERVIEW', 'green');
        // ক্লোন করে ইন্টারভিউতে পাঠানো
        const cardClone = card.cloneNode(true);
        interviewContainer.appendChild(cardClone);
    }

    if (rejectedBtn) {
        updateCardUI(card, 'REJECTED', 'red');
        // ক্লোন করে রিজেক্টেড-এ পাঠানো
        const cardClone = card.cloneNode(true);
        rejectedContainer.appendChild(cardClone);
    }
});

// ২. ইন্টারভিউ কন্টেইনার থেকে ক্লিকের লজিক (Move হবে)
interviewContainer.addEventListener('click', function (event) {
    const card = event.target.closest('.job-card');
    const rejectedBtn = event.target.closest('.rejected-btn');

    if (card && rejectedBtn) {
        // স্ট্যাটাস আপডেট
        updateCardUI(card, 'REJECTED', 'red');
        // সরাসরি Move করা (appendChild করলে আগের জায়গা থেকে সরে যায়)
        rejectedContainer.appendChild(card);
    }
});

// ৩. রিজেক্টেড কন্টেইনার থেকেও ইন্টারভিউতে মুভ করার লজিক (অপশনাল)
rejectedContainer.addEventListener('click', function (event) {
    const card = event.target.closest('.job-card');
    const interviewBtn = event.target.closest('.interview-btn');

    if (card && interviewBtn) {
        updateCardUI(card, 'INTERVIEW', 'green');
        interviewContainer.appendChild(card);
    }
});


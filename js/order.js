let tg = window.Telegram.WebApp;
let buy = document.getElementById('buy');
let order = document.getElementById('order');
tg.expand();

buy.addEventListener('click', () => {
    document.getElementById('main').style.display = 'none';
    document.getElementById('form').style.display = 'block';
    document.getElementById('user_name').value = tg.initDataUnsafe.user.first_name + ' ' + tg.initDataUnsafe.user.last_name;
});

order.addEventListener('click', () => {
    let error = document.getElementById('error');
    error.innerText = "";
    let name = document.getElementById('user_name').value;
    let email = document.getElementById('user_email').value;
    let phone = document.getElementById('user_phone').value;


    if (name.length < 5) {
        error.innerText = 'Please enter a valid name.';
        return;
    }
    if (email.length < 5) {
        error.innerText = 'Please enter an real email address';
        return;
    }
    if (phone.length < 5) {
        error.innerText = 'Please enter an real phone number';
        return;
    }

    let data = {
        name: name,
        email: email,
        phone: phone
    }

    tg.sendData(JSON.stringify(data));

    tg.close();
});
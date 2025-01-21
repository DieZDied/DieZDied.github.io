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
    let errorMassage = [];
    let name = document.getElementById('user_name').value;
    let email = document.getElementById('user_email').value;
    let phone = document.getElementById('user_phone').value;


    if (name.length < 5) {
        errorMassage.push('Please fill in all fields');
    }
    if (email.length < 5) {
        errorMassage.push('Please enter an real email address');
    }
    if (phone.length < 5) {
        errorMassage.push('Please enter an real phone number');
    }

    if (errorMassage.length > 0) {
        document.getElementById('errorMassage').innerHTML = errorMassage.join('<br>');
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
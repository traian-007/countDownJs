const $form = qS('#submit__form')
const $submitBtn = qS('#submit__btn')
const $login = qS('.icon__login')
const $nameInput = qS('.submit__input')
const $formBox = qS('.form__box')
const $countdown = qS('.countdown')
const $day = qS('.days')
const $hour = qS('.hours')
const $second = qS('.seconds')
const $minute = qS('.minutes')
const $title = qS('#title')
const $valueDate = qS('#date')
const $ac = qS('.container')


const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let interval = null
let timeFromInput = 0;
// let mail = ''


$login.addEventListener('click', openModal)
$form.addEventListener('submit', newDate)

function qS(el) {
    return document.querySelector(el)
}

function displayNone($el) {
    $el.style.display = 'none';
}

function displayBlock($el) {
    let ab = $el === $countdown ? 'flex' : 'block'
    $el.style.display = ab;

}

function newDate(event) {
    event.preventDefault();

    timeFromInput = new Date($valueDate.value).getTime();
    interval = setInterval(countDown, 1000)
    qS('#date').value = null
    displayNone($formBox)
    displayNone($form)
    displayNone($title)


    setTimeout(() => {
        displayBlock($countdown)
    }, 1000)
}

function openModal() {
    clearInterval(interval);
    displayNone($countdown)
    displayBlock($form)
    displayBlock($formBox)
    qS('.submit__input').value = null
    $ac.offsetWidth < 1400 ? displayNone($title) : displayBlock($title)
}

function showNotification() {
    const notification = new Notification('New message from Chicago!', {
        body: `Hi ${$nameInput.value}! Are you ready ? Take your panties, slippers and let's go to  fight a little bit`,
        icon: "https://thumbs.dreamstime.com/b/paintball-club-logo-paintball-icon-paintball-club-logo-paintball-icon-white-background-123718635.jpg"
    })
    notification.onclick = () => {
        window.location.href = "https://commandos.md/"
    }
}

const countDown = () => {
    const now = new Date().getTime();
    const restTime = timeFromInput - (now);
    const textDay = Math.floor(restTime / day);
    const textHour = Math.floor((restTime % day) / hour);
    const textMinute = Math.floor((restTime % hour) / minute);
    const textSecond = Math.floor((restTime % minute) / second);

    $day.innerHTML = textDay;
    $hour.innerHTML = textHour;
    $minute.innerHTML = textMinute;
    $second.innerHTML = textSecond;
    console.log('interval from count', interval)

    if (restTime < 1000) {
        console.log("it's end");
        // sendEmail()
        clearInterval(interval);
        if (!window.Notification) return;
        Notification
            .requestPermission()
            .then(showNotification)
    }
}




// if (Notification.permission === 'granted') {
//     showNotification()
// } else if (Notification.permission !== 'denied') {
//     Notification.requestPermission().then(permission => {
//         if (permission === 'granted') {
//             showNotification();
//         }
//     })
// }

// function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "babybadeabum@gmail.com",
//         Password: "cwyimqytgpkqlxvj",
//         To: 'bobyfishermilion@gmail.com',
//         From: "babybadeabum@gmail.com",
//         Subject: "fadsfdsf",
//         Body: "fadsfasd",
//     }).then(
//         message => alert(message)
//     );
// }
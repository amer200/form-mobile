const timer = document.getElementById('timer');
const subBtn = document.getElementById('subBtn');
let time = 120000;
const timerFunc = () => {
    setTimeout(() => {
        subBtn.disabled = false;
    }, time)
}

const subFun = () => {
    const mobile = document.getElementById('mobile').value;
    subBtn.disabled = true;
    subBtn.innerHTML = 'resend';
    timer.style.display = "inline";
    let timeleft = time;
    setInterval(() => {
        if (timeleft <= 0) {
            timer.style.display = "none";
            subBtn.disabled = false;
            return clearInterval();
        }
        timer.innerHTML = timeleft / 1000;
        timeleft -= 1000;
    }, 1000)
    fetch('url', {  //endpoint from back-end api
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mobile),
    })
        .then((response) => response.json())
        .then((data) => {
            alert('send message done')
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
// const timer = document.getElementById('timer');
// const subBtn = document.getElementById('subBtn');
// let time = 2000;
// const timerFunc = () => {
//     setTimeout(() => {
//         subBtn.disabled = false;
//     }, time)
// }

// const subFun = () => {
//     const mobile = document.getElementById('mobile').value;
//     subBtn.disabled = true;
//     subBtn.innerHTML = 'resend';
//     timer.style.display = "inline";
//     let timeleft = time;
//     setInterval(() => {
//         if (timeleft <= 0) {
//             timer.style.display = "none";
//             subBtn.disabled = false;
//             timer.innerHTML = '';
//             return timeleft = time;
//         }
//         timer.innerHTML = timeleft / 1000;
//         timeleft -= 1000;
//     }, 1000)
//     fetch('url', {  //endpoint from back-end api
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(mobile),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             alert('send message done')
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
// }
const timerBox = document.getElementById('timer');
timerBox.disabled = true;
let timer = 120;
setInterval(() => {
    if (timer <= 0) {
        clearInterval(this);
        timerBox.disabled = false;
        return timerBox.innerHTML = 'resend';
    }
    timerBox.innerHTML = `resend after ${timer - 1}s`
    timer--
}, 1000)

const resendCode = () => {
    location.reload(); // remove this after add your url
    fetch('url')
        .then(Response => {
            // your code here
            alert('')
        })
        .catch(err => {
            console.log(err);
        })
}
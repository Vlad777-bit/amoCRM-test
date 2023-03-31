const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const convertTime = (unit) => {
    return String(unit).length === 1 ? '0' + unit : unit;
};

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    const hh = () => convertTime(new Date().getHours());
    const mm = () => convertTime(new Date().getMinutes());
    const ss = () => convertTime(new Date().getSeconds());

    return (seconds = 1000) => {
        setTimeout(function run() {
            timerEl.innerText = `${hh()}:${mm()}:${ss()}`;

            setTimeout(run, seconds);
        }, seconds);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
    // Очистите input так, чтобы в значении
    // оставались только числа

    if (!isNaN(Number(event.target.value))) {
        return;
    } else {
        event.target.value =
            !isNaN(parseInt(event.target.value)) && parseInt(event.target.value)
                ? parseInt(event.target.value)
                : null;
    }
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value) * 1000;

    animateTimer(seconds);

    inputEl.value = '';
});

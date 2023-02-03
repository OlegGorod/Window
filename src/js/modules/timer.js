const timer = () => {
    const daysElement = document.querySelector('#days');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');

    const deadline = '1 Jan 2025';

    function runningTimer() {
        const newDate = new Date(deadline);
        const currentDate = new Date();
        const totalSeconds = (newDate - currentDate) / 1000;

        let days = Math.floor((totalSeconds / 60 / 60 / 24))
        let hours = Math.floor((totalSeconds / 60 / 60) % 24)
        let minutes = Math.floor((totalSeconds / 60) % 60)
        let seconds = Math.floor(totalSeconds % 60)

        if (totalSeconds <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
            clearInterval(timeinterval);
        }

        daysElement.textContent = days;
        hoursElement.textContent = formatTime(hours)
        minutesElement.textContent = formatTime(minutes)
        secondsElement.textContent = formatTime(seconds)
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

   
    const timeinterval = setInterval(runningTimer, 1000)
    runningTimer();

}

export default timer;
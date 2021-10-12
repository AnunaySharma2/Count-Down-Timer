const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec');
const btn = document.querySelector('.btn');
const hourDisplay = document.querySelector('.hourDisplay');
const minDisplay = document.querySelector('.minDisplay');
const secDisplay = document.querySelector('.secDisplay');
const timeDisplay = document.querySelector('.time-display');

btn.addEventListener("click", () => {
    let hours = hour.value;
    let mins = min.value;
    let secs = sec.value;
    let totalTime = hours*60*60+mins*60+secs;
    if(hours === 0 && mins === 0 && secs ===0){
        totalTime = 0;
    }
    timeDisplay.classList.remove('d-none')
    let timer = setInterval(() => {
        // console.log(totalTime);
        totalTime--;
        hours = Math.floor(totalTime/(60*60));
        mins = Math.floor((totalTime/60)%60);
        secs = totalTime%60;
        if(mins<10){
            mins = `0${mins}`;
        }
        if(secs<10){
            secs = `0${secs}`;
        }
        hourDisplay.textContent = hours;
        minDisplay.textContent = mins;
        secDisplay.textContent = secs;
        console.log(`${hours}:${mins}:${secs}`)
        if(totalTime===0){
            clearInterval(timer);
            timeDisplay.classList.add('d-none');
        }
    }, 1000);
})

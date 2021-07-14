const time = {
	seconds: 0,
	minutes: 0,
	hours: 0,
};


function timeCounter() {
	if(time.seconds === 60) {
		time.minutes += 1;
		time.seconds = 0;
	}
	if(time.minutes === 60) {
		time.hours += 1;
		time.minutes = 0;
	}
	let el = document.querySelector(".timerValue");
	el.textContent = time.hours.toString().padStart(2,"0") + ":" + time.minutes.toString().padStart(2,"0") + ":" + time.seconds.toString().padStart(2,"0");
	time.seconds += 1;
};
setInterval(() => timeCounter(), 1000);

timeCounter()

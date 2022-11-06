const clock = document.querySelector("h2");
const month = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
]



function getClock() {
    const date = new Date();
    const year = date.getFullYear();
    const monthName = month[date.getMonth()];
    const day = date.getDate();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}\n${year}년 ${monthName} ${day}일`;
}

getClock();
setInterval(getClock, 1000);
//Create clock
var clock = () => {
    let day = new Date();
    let hour = day.getHours();
    let minute = day.getMinutes();
    let second = day.getSeconds();

    let timer = document.getElementById("timer");
    if (hour < 12) {
        timer.innerHTML = hour + ":" + minute + ":" + second + "AM";
    }else{
        timer.innerHTML = hour + ":" + minute + ":" + second + "PM";
    }
}
setInterval(clock, 1000);

//change color
var changeBg = () => {
    if (document.body.style.background == "pink") {
        document.body.style.background = "teal";
    }else {
        document.body.style.background = "pink";
    }
}
setInterval(changeBg, 1000);

//change background
// var changeBg = () => {
//     if (document.body.style.background == "morning.png") {
//         (document.body.style.background == "green.jpg")
//     }else {
//         (document.body.style.background == "morning.png");
//     }
// }
// setInterval(changeBg, 1000);
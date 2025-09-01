function showTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds()


    document.getElementById("hr").innerHTML = hr.toString().padStart(2, "0")
    document.getElementById("min").innerHTML = min.toString().padStart(2, "0")
    document.getElementById("sec").innerHTML = sec.toString().padStart(2, "0")
}


showTime()
setInterval(() => {
    showTime()
}, 1000);
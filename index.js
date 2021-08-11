let x = 1628054980836


function updateTime(){
    x=x-1000;
    var currentTime = new Date(x)
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    var days = currentTime.getDate()
    if (days < 10){
        days = "0"+ days
    }
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (seconds< 10){
        seconds = "0" + seconds
    }
    var t_str = days+":"+ hours + ":" + minutes + ":"+ seconds +" ";
    document.getElementById('timer').innerHTML = t_str;
}
setInterval(updateTime, 1000);
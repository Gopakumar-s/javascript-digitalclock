function showTime(){
    var date = new Date();
    var h =date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();

    var time= hh + ":" + mm + ":" + ss ;

    document.getElementById("myDigitalClock").innerHTML=time;
    document.getElementById("myDigitalClock").textContent=time;
}
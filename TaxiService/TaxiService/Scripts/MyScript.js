﻿function generateMenu() {
    if (document.getElementById("menu").style.display == "none") {
        document.getElementById("menu").style.display = "block";
    } else {
        document.getElementById("menu").style.display = "none";
    }
}

function formatTime() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
        seconds = d.getSeconds().toString().length == 1 ? '0' + d.getSeconds() : d.getSeconds(),
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    document.getElementById("clock").innerHTML = days[d.getDay()] + ' ' +  d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ':' + seconds;
    setTimeout(formatTime, 1000);
}

function showOtherInfo(elem) {
    if (document.getElementById("otherInfo" + elem.id).style.display == "none") {
        document.getElementById("otherInfo" + elem.id).style.display = "block";
        document.getElementById(elem.id).innerHTML = "-";
    } else {                     
        document.getElementById("otherInfo" + elem.id).style.display = "none";
        document.getElementById(elem.id).innerHTML = "+";
    }
}
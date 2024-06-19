countdown = 1;
function dCountdown(){
    if(countdown == 1){
        document.getElementById("dCountdown").innerHTML = "Enable Countdown";
        countdown = 0;
    }
    else{
        document.getElementById("dCountdown").innerHTML = "Disable Countdown";
        countdown = 1;
    }
    console.log(countdown);
}
function tmCalculator() {
    window.location="index2.html";
}
function smCalculator() {
    window.location="index3.html";
}

function mTimer() {
    window.location="index.html";
}
//https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
countdownnoise = new Audio('Countdown.m4a');
sec = 3;
sc = 60;
function start(){
    if (sec==3){
        if(sc==60){
            if(countdown==1){
                sec = 3;
                timr = setInterval(function(){
                    document.getElementById('timer').innerHTML=sec+" Seconds";
                    if(sec>0){
                        countdownnoise.play();
                    }
                    sec--;
                    if (sec < 0) {
                        clearInterval(timr);
                    }
                    if (sec == 0) {
                        timer();
                    }
                }, 1000);
            }
            else{
                timer();
            }
        }
    }
}
//https://www.delftstack.com/howto/javascript/play-audio-javascript/
startsound = new Audio("Start Sound.m4a");
switchdrivers = new Audio("Switch Drivers.m4a");
stopsound = new Audio("Stop Sound.m4a");
function timer(){
    sc = 60;
    tir = setInterval(function(){
        document.getElementById('timer').innerHTML=sc+" Seconds";
        sc--;
        if (sc < 0) {
            clearInterval(tir);
        }
        if(sc == 59) {
            startsound.play();
        }
        if (sc == 34){
            switchdrivers.play();
        }
        if (sc == 24){
            switchdrivers.play()
        }
        if(sc == -1){
            stopsound.play();
        }
    }, 1000);
}
function stop(){
    stopsound.play();
    clearInterval(timr);
    clearInterval(tir);
}
function reset(){
    sec = 3;
    sc = 60;
    document.getElementById("timer").innerHTML=sc+" Seconds";
}
function tcFields(){
    document.getElementById("tgScored").value=0;
    document.getElementById("passes").value=0;
    document.getElementById("tcSwitches").value=0;
    document.getElementById("tScore").innerHTML="Score: 0";
}
function tcScore(){
    tgScored = Number(document.getElementById("tgScored").value);
    passes = Number(document.getElementById("passes").value);
    tcSwitches = Number(document.getElementById("tcSwitches").value);
    if(tcSwitches > tgScored){
        tcSwitches = tgScored;
    }
    if(tcSwitches == " "){
        tvalue = 1;
    }
    else if(tcSwitches == 0){
        tvalue = 1;
    }
    else if(tcSwitches == 1){
        tvalue = 4;
    }
    else if(tcSwitches == 2){
        tvalue = 8;
    }
    else if(tcSwitches == 3){
        tvalue = 10;
    }
    else if(tcSwitches >= 4){
        tcSwitches = 4;
        tvalue = 12;
    }
    if(passes > tgScored){
        passes = tgScored;
    }
    tscore = 0;
    tscore = tgScored;
    tscore = tscore + tcSwitches;
    tscore = tscore + passes*tvalue;
    document.getElementById("tScore").innerHTML="Score: "+tscore;
}
function scFields(){
    document.getElementById("sgScored").value=0;
    document.getElementById("scSwitches").value=0;
    document.getElementById("sScore").innerHTML="Score: 0";
}
function scScore(){
    sgScored = Number(document.getElementById("sgScored").value);
    scSwitches = Number(document.getElementById("scSwitches").value);
    if(scSwitches > sgScored){
        scSwitches = sgScored;
    }
    if(scSwitches == " "){
        svalue = 1;
    }
    else if(scSwitches == 0){
        svalue = 1;
    }
    else if(scSwitches == 1){
        svalue = 4;
    }
    else if(scSwitches == 2){
        svalue = 8;
    }
    else if(scSwitches == 3){
        svalue = 10;
    }
    else if(scSwitches >= 4){
        scSwitches = 4;
        svalue = 12;
    }
    sscore = 0;
    sscore = sgScored*svalue;
    sscore = sscore + scSwitches;
    document.getElementById("sScore").innerHTML="Score: "+sscore;
}
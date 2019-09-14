$(document).ready(function(){})

var trigger = false;
function triggerStopwatch(){
    if(trigger==false){
        startStopwatch();
        trigger = true;
    }else{
        stopwatchRun();
    }
}

// What to do after clicking 'Start' button.
var stopwatchInterval;
var m = '0'+'0';
var s = '0'+'0';
var ms = '0'+'0';
function startStopwatch(){
    $('#realTime').text(m+':'+s+'.'+ms);
    $('#start').text('Stop');
    $('#start').addClass('stop');
    $('#lap').removeAttr('disabled');
    stopwatchInterval = setInterval(stopwatchRun,10);
}

// Stopwatch starts working.
var i=0;
function stopwatchRun(){
    if(i<10){
        ms = '0' + i;
    }else if(i<100){
        ms = i;
    }else if(i==100 && s<10){
        ms = '0'+'0';
        s = '0' + s + 1;
    }else if(s==60 && m<10){
        s = '0'+'0';
        m = '0' + m + 1;
    }else if(m<60){
        m += 1;
    }
    i++;
}

// What to do after clicking 'Stop' button.
function stopStopwatch(){
    $('#start').text('Start');
    $('#start').removeClass('btn btn-secondary').addClass('btn btn-dark');
    $('#lap').text('Reset');
    clearInterval(stopwatchInterval);
}

// What to do after clicking 'Lap' button.
function recordTime(){
     $('#laps').append(lapTime);
     var lapTime = '<tr>'+ title + time + '</tr>';
     var title = '<td>Lap'+ num +'</td>'; 
     var time = '<td>'+ currentTime +'</td>';
     var currentTime = $('#realTime').text();
}

// What to do after clicking 'Reset' button.
function resetStopwatch(){
     m = '0'+'0';
     s = '0'+'0';
     ms = '0'+'0';
     $('#realTime').text(m+':'+s+'.'+ms);
     $('#laps tr').remove();
}


var isRunning = false;
function triggerStopwatch(){
    if(isRunning==false){
        startStopwatch();
        isRunning = true;
    }else{
        stopStopwatch();
        isRunning = false;
    }
}

// What to do after clicking 'Start' button.
var stopwatchInterval;
var m = 0;
var s = 0;
var ms = 0;
var btnText = $('#lap').text();;
function startStopwatch(){
    $('#start').text('Stop');
    $('#start').addClass('stop');
    $('#lap').removeAttr('disabled');
    stopwatchInterval = setInterval(stopwatchRun,10);
    $('#lap').text('Lap');
}

// Stopwatch starts working.
function stopwatchRun(){
    ms += 1;
    if (ms==100){
        ms = 0;
        s += 1;
    }
    if(s==60){
        s = 0;
        m += 1;
    }
    
    var realTime = '';
    if (ms<10) {
        realTime += '0'+ ms;
    } else {
        realTime += ms;
    }
    realTime = '.' + realTime;

    if (s<10) {
        realTime = '0'+ s + realTime;
    } else {
        realTime = s + realTime;
    }
    realTime = ':' + realTime;

    if (m<10) {
        realTime = '0'+ m + realTime;
    } else {
        realTime = m + realTime;
    }
    $('#realTime').text(realTime);

}

// What to do after clicking 'Stop' button.
function stopStopwatch(){
    $('#start').text('Start');
    $('#start').removeClass('stop');
    $('#lap').text('Reset');
    clearInterval(stopwatchInterval);
}

// What to do after clicking 'Lap' button.
var num = 1;
function recordTime(){ 
     var title = '<td>Lap'+ num +'</td>'; 
     var currentTime = $('#realTime').text();
     var time = '<td>'+ currentTime +'</td>';
     var lapTime = '<tr>'+ title + time + '</tr>';   
     num += 1;
     $('#laps').append(lapTime);
     btnText = $('#lap').text();
     if (btnText == 'Reset') {
        resetStopwatch();
     }

}

// What to do after clicking 'Reset' button.
function resetStopwatch(){
     m = 0;
     s = 0;
     ms = 0;
     var realTime = '0'+m+':0'+s+'.0'+ms;
     $('#realTime').text(realTime);
     $('#laps tr').remove();
     $('#lap').text('lap');
     $( "#lap" ).prop( "disabled", true );
}





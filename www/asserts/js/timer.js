var start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear');
$("#start").click(function() {});
start.onclick = function() {
    $("#stop").css('display', 'inline');
    M.toast({
        html: 'Timer started'
    });
    var time = $("#timer").val();
    console.log(time);
    var a = time.split(':');
    var count = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    var counter = setInterval(function() {
        count = count - 1;
        if (count == -1) {
            playBeep();
            clearInterval(counter);
            $("#stop").css('display', 'none');
            M.toast({
                html: 'Timer completed'
            });
            $("#start").css('display', 'inline');
            return;
        }
        var seconds = count % 60;
        var minutes = Math.floor(count / 60);
        var hours = Math.floor(minutes / 60);
        minutes %= 60;
        hours %= 60;
        hours = (hours > 0) ? hours : '00';
        minutes = (minutes > 0) ? minutes : '00';
        seconds = (seconds > 0) ? seconds : '00';
        $("#timer").val(hours + ":" + minutes + ":" + seconds);
    }, 1000);
    $("#start").css('display', 'none');
    stop.onclick = function() {
        $("#stop").css('display', 'none');
        M.toast({
            html: 'Timer stopped'
        });
        clearTimeout(counter);
        $("#start").css('display', 'inline');
    }
    clear.onclick = function() {
        clearTimeout(counter);
        M.toast({
            html: 'Timer cleared'
        });
        $("#stop").css('display', 'none');
        $("#start").css('display', 'inline');
        $("#timer").val("00:01:00");
    }
}

function playBeep() {
    var beep = document.getElementById("beep");
    beep.play();
    setInterval(stopBeep, 60000);
}

function stopBeep() {
    var beep = document.getElementById('beep');
    beep.pause();
    clearInterval(stopBeep);
}
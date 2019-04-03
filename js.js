$(document).ready(function () {
    var html = '';
    var index = -1;
    const numOfDigits = 9;
    var holder = [];
    for (var i = 0; i <= numOfDigits + 1; i++) {

        var inner = createBall(random(0, 9));
        holder.push(inner);
    }

        $('#box').delay(1500).append(holder[0]);

   
        $('#box').delay(1500).append(holder[1]);

        $('#box').delay(1500).append(holder[2]);

    
        $('#box').delay(1500).append(holder[3]);


    function createBall(number) {

        var ball = $('<span>');
        $(ball).text(number);
        $(ball).addClass('ball');
        index++
        $(ball).attr('id', 'b' + index.toString());
        return ball;
    }

    function random(min, max) {

        return Math.floor((Math.random() * max) + min);

    }



});
const digits = 60;
const HowManyNumbers = 6;
var holder = [];


$(document).ready(function () {

    var lotteryNumber = [];
    var index = -1;

    $('#generate').on('click', go);

    function go() {
        clearBalls();
        lotteryNumber = generateLottoNumbers(lotteryNumber);
        for (var i = 0; i <= lotteryNumber.length - 1; i++) {

            var ball = createBall(lotteryNumber[i]);

            holder.push(ball);

            $('#box').append(ball).delay(1000);

        }
    }

    function clearBalls() {
        $('#box').empty();
        index = -1;
        lotteryNumber = [];
    }

    function generateLottoNumbers(_lotteryNumber) {

        while (_lotteryNumber.length < HowManyNumbers) {

            var rnd = randomNum(0, digits);
            if (!_lotteryNumber.includes(rnd)) {
                _lotteryNumber.push(rnd);
            }
        }
        return _lotteryNumber;
    }

    function createBall(number) {

        var ball = $('<span>');
        $(ball).text(number);
        $(ball).addClass('ball');
        index++;
        $(ball).css('animation', 'bounce-in-top ' + (index * 500).toString() + 'ms cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards');
        $(ball).attr('id', 'ball_' + index.toString());
        return ball;
    }

    function randomNum(min, max) {

        return Math.floor((Math.random() * max) + min);

    }



});
const digits = 60;
const HowManyNumbers = 6;
var holder = [];


$(document).ready(function () {

    var lotteryNumber = [];
    
	var count = 0
    $('#generate').on('click', go);

    function go() {
		if(count > HowManyNumbers - 1){
			clearBalls();
        }else if(count === HowManyNumbers - 1){
						 $('#generate').text("New Lotto")
						 
		}else{
			 $('#generate').text("Digit " + (count + 1).toString())
		}
		
		
		setTimeout(function(){
			var nextNumber = generateLottoNumber()
			var ball = createBall(nextNumber);
			$('#box').append(ball).delay(1000);

			
		},1000)
		count++
    }

    function clearBalls() {
        $('#box').empty();
        count = 0;
		 $('#generate').text("Digit " + (count + 1).toString())
		holder = []
    }

    function generateLottoNumber() {

       
			do{
            var rnd = randomNum(0, digits);
           
			}while(holder.includes(rnd))
        holder.push(rnd)
        return rnd;
    }

    function createBall(number) {

        var ball = $('<span>');
        $(ball).text(number);
        $(ball).addClass('ball');
        $(ball).css('animation', 'bounce-in-top 500ms cubic-bezier(0.645, 0.045, 0.355, 1.000) forwards');
        return ball;
    }

    function randomNum(min, max) {

        return Math.floor((Math.random() * max) + min);

    }



});

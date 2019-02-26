/**
 * 
 */

// 18_tostringradix.js

var hex = 0x1a;

console.log('hex = ' + hex);
console.log('hex = ' + hex.toString(16));
console.log('hex = ' + hex.toString(2));
// 숫자.함수() 구조가 가능. -> '숫자도 객체다'


// 21_timer.js

var intervalID = setInterval(function(){
	console.log(new Date());
}, 1000);

setTimeout(function(){
	clearInterval(intervalID);
}, 10000);


// countdown 만들기
function launch(){
	console.log('발사!!!');
}

function fire(){
	console.log('Boom!!!');
}

function countdown(counter, fn){
	
	var timerId = setInterval(function(){
		counter--;
		console.log(counter);
		if(counter == 0){
			clearInterval(timerId);
			fn();
		}
	}, 1000);
}

countdown(10, launch);
countdown(4, fire);
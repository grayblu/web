/**
 * 
 */


console.log('Hello \Javascript');

var a= 3;
if(a==3){
	console.log('a는 3입니다');
}else{
	console.log('a는 3이 아님');
}

var b;
console.log(b);
b = 13;
console.log(b)
//console.log(c);

//dd = 'ejal';
//console.log(dd);
//console.log(e);


console.log('함수밖 global = ' + global);
func();

function func(){
	console.log('함수안 local = ' + local);
	console.log('함수안 global = ' + global);
	temp = 10;
	console.log('함수안 temp = ' + temp);
	var local = '로컬';

}


var global = '전역';
console.log('함수밖 global = ' + global);
console.log('함수밖 temp = ' + temp);

//console.log(local);


//07_novar.js
var score = 100;
function func1(){
	score = 77;
	console.log('함수 안 score = ' + score);
}
func1();
console.log('함수밖 score = ' + score);

//08_blockscope.js
let k;
for(var i = 0; i<3;i++){
	k = 1234;
	console.log('i = ' + i);
}

console.log('i = ' + i + ',k = ' +k);

//13_nan.js
var veryBig = 1234/0;
console.log('veryBig = ' + veryBig);

var noNumber = Math.sqrt(-2);
console.log('noNumber = ' + noNumber);


//14_implicit.js
var name = '김상형: ';
var score1 = 98;
console.log(name-score1);

var value1 = '8';
var value2 = '6';
var add = value1 + value2;
console.log('add: '+add);

var sub = value1 - value2;
console.log('sum: '+sub);

//16_tonumber.js
var korean = '82a';
var english = '75';
//var total = Number(korean) + Number(english);

var total = parseInt(korean) + parseInt(english);

console.log('총점은 ' + total + '이다');

//



























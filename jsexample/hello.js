/**
 * 
 */
"use strict"


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
/**
 * 
 */

// 09_nestfunction.js

function add(a,b){
	return a+b;
}

function sum(n){
	var s=0;
	for(var i=0;i <= n; i++){
		s = add(s, i);
	}
	return s;
}

console.log('1~100 = ' + sum(100));

// 09_nestfunction3.js

function outer(){
	var outvalue = 5678;
	
	function inner(){
		var invalue = 1234;
		console.log('outvalue = ' + outvalue);
	}
	
	inner();
//	console.log('invalue=' + invalue); Error
}
outer();

// 익명 함수

//var fn = function(){
function fn(){
	console.log('Hello javascript');
}

console.log(fn);

fn();


var fn2 = fn;
fn2();
// 함수 참조가 2개

// 12_funcargument.js

var add = function(a,b){
	return a+b;
}

var multi = function(a,b){
	return a*b;
}

function calc(a,b,f){
	return f(a,b);
}

console.log('2+3 = ' + calc(2,3,add));
console.log('2*3 = ' + calc(2,3,multi));

// ** 함수를 매개변수로 전달 시 익명 함수로 구현하여 전달 가능 **
var result = calc(3,2, function(a,b){
	return a/b;
});
// ** 자바스크립트 람다 표현(화살표 함수) **
result = calc(3,2, (a,b)=>a/b);

console.log('3/2 = ' + result);

// function forEach(){}

function forEach(arr1, fn1){
	if(!fn1) return;
	
	for(var i=0; i<arr1.length;i++){
		fn1(arr1[i], i, arr1);
	}
}

var data = [1,2,3,4,5,6];
function test(){
	
}
var newData = [];

//forEach(data, (v,i, arr)=>{
//arr[i] = v*v;
//});

// 새로운 배열로 값을 복사할 경우
forEach(data, (v,i, arr)=>{
	newData[i] = v*v;
});


forEach(data, console.log);


//forEach(data, function(v,i){
//	console.log(`${v} : ${i}`);
//});
//
//forEach(data, v=>console.log(v));


// 함수를 리턴값으로 하는 함수

function outer(){
	return function(){
		console.log('Hello Function...');
	};
}

// 호출 1
outer()();

// 호출 2
var fn = outer();
fn();

// 클로저

function test(name){
	var output = 'hello ' + name + '...!';
	
	return function(){
		console.log(output);
	};
}

test('javascript')();
// scope 객체가 아직 참조 중이므로 console.log(output)을 통해 결과가 출력됨

// ** 비동기 함수 ** 13_closure4.js 
function outcount(name, interval){
	var count = 0;
	
	setInterval(function(){
		// call back 함수
		count++;
		console.log(name, count + "초가 지났습니다.");
	}, interval);
}
outcount('test1', 1000);
outcount('test2', 330);

// 재귀호출 15_callee.js

console.log('5! = ' + function(n){
	if(n==1){
		return 1;
	}else{
		return n * arguments.callee(n-1);
	}
}(5));	// 함수 정의와 함께 매개값으로 5를 지정함


































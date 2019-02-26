/**
 * 
 */

// 01_function.js

function add(a,b){
	return a+b;
}

console.log('2+3=' + add(2,3));
console.log('java + script =' + add('java', 'script'));

console.log(add());
console.log(add(2));
console.log(add(2, 3));
console.log(add(2, 3, 4, 5));

// sumAll()

function sumAll(){
	var sum =0;
	
	for(var i in arguments){
//		var i=0;i<arguments.length;i++
		sum += arguments[i];
	}
	return sum;
}

console.log(sumAll(1,2,3,4,5));

// 06_arguments2.js

function total(){
	var s =0;
	if(typeof(arguments[0]) == 'string'){
		s = "";
	}
	for(var i =0;i<arguments.length;i++){
		s += arguments[i];
	}
	return s;
}

console.log(total(1,2,3));
console.log(total('니들이', '게맛을', '알어?'));

// 07_callby.js

function byvalue(a){
	a = 9999;
}

function byref(a){
	a[0] = 9999;
}

var int = 1000;
var ar = [1000, 2000, 3000];

byvalue(int);
console.log('int='+int+', ar[0] = ' + ar[0]);

byref(ar);
console.log('int='+int+', ar[0] = ' + ar[0]);

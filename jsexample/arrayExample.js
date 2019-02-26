/**
 * 
 */

// 01_intarray.js

var ar = [1,2,5,9,15];
//var ar = new Array(1,2,5,9,15);

for(var i in ar){
//	(var i=0;i<ar.length;i++)
	console.log('ar['+i+'] ='+ar[i]);
}

ar.length = 3;
for(var i in ar){
//(var i=0;i<ar.length;i++)
	console.log('ar['+i+'] ='+ar[i]);
}

ar.length = 10;
for(var i in ar){
	console.log('ar['+i+'] ='+ar[i]);
}

ar[20] = 0;
for(var i in ar){
	console.log('ar['+i+'] ='+ar[i]);
}

// 03_arraymix.js
var ar1 = [1234, '문자열', true, {name:'김상형', age:29}];
delete ar1[2];
for (var i=0;i<ar1.length;i++){
	console.log('ar['+i+']='+ar1[i]);
}

// 08_stringindex.js
var ar2 = [0,1,2,3];
console.log('ar[1]= ' + ar2[1]);

ar2['korea']=4;
console.log('ar["korea"]='+ar2['korea'], ar2.length);
console.log('ar["korea"]='+ar2.korea, ar2.length);

for(var i in ar2){
	console.log(`ar2의 배열 구성: ${i}`);
}
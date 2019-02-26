/**
 * 
 */

//10_forloop2.js

var arScore = [88, 78, 96, 54, 23];

for(var st = 0; st<arScore.length; st++){
	console.log(st+'번째 학생의 성정: '+arScore[st]);
	console.log(`${st}번째 학생의 성적: ${arScore[st]}`);
}

//18_nestarray.js
var ar = [[0,1,2,3],[4,5,6],[7,8]];

//for(var i=0; i<ar.length; i++){
//	for(var j=0;j<ar[i].length;j++){
//		console.log('ar['+i+']['+j+'] ='+ar[i][j]);
//	}
//	console.log();
//}

//for in 조건문으로 정의할 경우

for(var i in ar){
	for(var j in ar[i]){
		console.log(`ar[${i}][${j}] = ${ar[i][j]}`);
	}
	console.log();
}

console.log();
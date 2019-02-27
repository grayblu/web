/**
 * 
 */

// 유사 배열
var human = {
		name: '김상형',
		age: 29
};
human[0] = 87;
human[1] = 79;
human[2] = 92;
human.length = 3;

for(var i=0; i<human.length; i++){
	console.log('human[' + i + '] = ' + human[i]);
}

console.log('------');

for(var i in human){
	console.log('human[' + i + '] =' + human[i]);
}

console.log(human);

// 딕셔너리-map
var cap = new Object();

cap['a'] = 'A';
cap['b'] = 'B';
cap['c'] = 'C';

var keys = Object.keys(cap);
console.log(keys);

//console.log('a의 값은 ? ' + cap.a);
//console.log(cap);

// set
var set = {};
set['a'] = 1;
set['b'] = 1;
set['a'] = 1;
set['c'] = 1;

keys = Object.keys(set)
console.log(keys)
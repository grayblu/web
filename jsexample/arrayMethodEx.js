/**
 * 
 */

// 01_join.js

var ar = [0,1,2,3];

console.log('ar = ' + ar.join());
console.log('ar = ' + ar.join(', '));
console.log('ar = ' + ar.join('-> '));

ar.reverse();
console.log('ar = ' + ar);

ar.push(100, 200);
console.log('ar = ' + ar);

ar.push(300);
console.log('ar = ' + ar);

ar.pop();
console.log('ar = ' + ar);

ar.unshift(1000);
console.log('ar = ' + ar);
ar.shift();
console.log('ar = ' + ar);

// 06_splice.js

// 삽입만 하기
var ar = [0,1,2,3,4,5,6];
ar.splice(2,0,10,11,12);
console.log('ar = ' + ar);

// 삭제만 하기
ar.splice(2,3);
console.log('ar = ' + ar);

// 삭제 후 삽입 하기
ar.splice(2,3,10,11);
console.log('ar = ' + ar);

ar.splice(100,10);
//범위 밖이므로 적용 안됨
console.log('ar = ' + ar);

// 07_slice.js
ar = [0,1,2,3,4,5,6,7];
subar = ar.slice(2,5);
console.log('ar = ' + ar);
console.log('subar = ' + subar);

// 08_concat.js
var ar1 = [0,1,2];
var ar2 = [3,4,5,6,7];
var ar3 = ['a','b','c'];

var ar4 = ar1.concat(ar2);
console.log('ar4 = ' + ar4);

var ar5 = ar4.concat(ar3);
console.log('ar5 = ' + ar5);

// 09_sortarray.js

ar5.sort();
// default sort는 문자열로 비교
console.log('after = ' + ar5);

// 10_sortcompare.js

function compare(left, right){
	return right - left;
}

ar5.sort((left, right)=>right-left);
console.log('after = ' + ar5);

// 13_casesort.js

var country = ['korea', 'USA', "Japan", "China"];
console.log('before = ' + country);

country.sort(function (left, right){
	var left2 = left.toLowerCase();
	var right2 = right.toLowerCase();
	if(left2 < right2) return -1;
	if(left2 > right2) return 1;
	return 0;
});

console.log('after = ' + country);

// 14_foreach.js
var score = [82, 96, 54, 76, 9, 100, 69, 88];
var sum = 0;

score.forEach(function(value){
//	for(var i=0; i<score.length; i++)
	sum += value;
});

console.log('sum = ' + sum);

// 15_map.js
var score2 = score.map((value)=>value*2);

console.log("score2 = " + score2);

var names = ['홍길동', '고길동', '둘리']

var item = names.map(e => `<li>${e}<li>`).join('\n');

items = '<ul>\n' + item + '\n</ul>';
console.log(items);

var score = [82, 96, 54, 76, 9, 100, 69, 88];

var score2 = score.filter(value=>(value>=80));

console.log('80 이상의 값을 갔던 ' + score2);
























































/**
 * 
 */

var human = {
		name: '김상형',
		age: 29
};

console.log('name = ' + human.name);
console.log('age = ' + human['age']);
//console.log('age = ' + human[age]);

// 05_runtimename.js

var human = {
		name: '김상형',
		age: 29,
		score1: 99,
		score2: 88,
		score3: 82
};

for(var i =1;i<=3;i++){
	console.log(i + '학년 성적 = ' + human['score' + i] + '점');
}

// 09_attribute.js
var person = {
		name: '홍길동',
		eat: function(food){
			console.log(this.name + '이' + food + '를 먹습니다.');
		}
}

person.eat('피자');

// 10_nestobject.js
var human = {
		name: '김상형',
		age: 29,
		address: {
			city: '하낭시',
			dong: '독풍동',
			bunji: 638
		},
		print: function(){
			console.log('name = ' + this.name + ", 나이 = " + this.age);
			console.log('주소 = ' + this.address.city + ' ' + this.address.dong +
						' ' + this.address.bunji);
		}
};

human.print();
human['print']();
print = human.print.bind(human);
print();
//console.log('name = ' + human.name + ", 나이 = " + human.age);
//console.log('주소 = ' + human.address.city + ' ' + human.address.dong +
//			' ' + human.address.bunji);


// 동적으로 속성과 메서드 추가, 제거

var student = {};
student.name = '홍길동';
student.hobby = '악기';
student.special = '프로그래밍';

console.log(student);
//student.toString = function(){
//	var string;
//	for(var key in this){
//		if(key != 'toString'){
//			string += key + ':' + this[key] + ', ';
//		}
//	}
//	console.log(string);
//}

//delete student.hobby;

console.log(student.toString())
// 자바스크립트에서 Default toString()의 형태 -> [object Object]


// 16_inoperation2.js

var ar  = [1,2,3];
delete(ar[1]);

if(0 in ar){
	console.log('0번째 요소가 있습니다.');
}
if(1 in ar){
	console.log('1번째 요소가 있습니다.');
}
console.log(ar);


























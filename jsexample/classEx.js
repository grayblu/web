/**
 * 
 */

// 함수를 사용한 객체 생성
function makeStudent(name, korean, math, english, science){
	var student = {
			name: name,
			math: math,
			english: english,
			science: science,
			
			getSum: function(){
				return this.korean + this.math + this.english + this.science;
			},
			
			getAverage: function(){
				return this.getSum() / 4;
			},
			
			toString: function(){
				return `${this.name}\t${this.getSum()}\t${this.getAverage()}`;
			}
			
	};
	return student;
}

//var students = [];
//students.push(makeStudent('이현호', 90, 90, 80 , 80));
//
//var output = 'name\t총점\t평균\n';
//for(var i in students){
//	output += students[0].toString();
//}
//console.log(output);

//var print = makeStudent('이현호', 90, 90, 80 , 80);
//console.log(print);


// new를 통해 인스턴스 생성
function Student(){
	
}
var student = new Student();
console.log({});
console.log(student);

var student2 = Student();
console.log(student2);


// 메서드 생성
function Student(name, korean, math, english, science){
	if(!(this instanceof Student)){
//		예외 발생시키기
//		throw 'new로 호출해야 합니다.';
//		변환 함수로 작동하게
		return new Student(name, korean, math, english, science);
	}
	
	
	this.name = name;
	this.korean = korean;
	this.math=math;
	this.english=english;
	this.science=science;
	
	this.getSum= function(){
		return this.korean + this.math + this.english + this.science;
	}
	
	this.getAverage=function(){
		return this.getSum() / 4;
	}
	
	this.toString=function(){
		return `${this.name}\t${this.getSum()}\t${this.getAverage()}`;
	}
	
}

var student = new Student('이현호', 90, 80, 80, 70);
console.log(student);
var student2 = Student('이현호2', 90, 80, 80, 70);
console.log(student2)

//var student = new Student('이현호', 90, 80, 80, 70);

/*
var student = [];

student.push(new Student('이현호', 90, 80, 80, 70));
student.push(new Student('이현호2', 90, 80, 80, 70));
student.push(new Student('이현호3', 90, 80, 80, 70));

var output = 'name\t총점\t평균\n';
for(var i in student){
	output += student[i].toString()+'\n';
}
console.log(output);
*/

// ** 프로토타입 **
function Student(name, korean, math, english, science){
// 생성자 함수 구성 -> 함수 내부에 속성만 정의	
	this.name = name;
	this.korean = korean;
	this.math=math;
	this.english=english;
	this.science=science;
}

// 프로토타입
Student.prototype.getSum = function(){
	return this.korean + this.math + this.english + this.science;
}

Student.prototype.getAverage=function(){
	return this.getSum() / 4;
}

Student.prototype.toString=function(){
	return `${this.name}\t${this.getSum()}\t${this.getAverage()}`;
}

// 프로토타입 예 21_prototype.js

function Human(name, age){
	this.name = name;
	this.age = age;
	
}

Human.prototype.intro = function(){
	console.log('prototype 메서드');
	console.log('name = ' + this.name);
	console.log('age = ' + this.age);
};

var kim = new Human('김상형', 30);
kim.intro = function(){
	console.log('인스턴스 메서드');
	console.log('name = ' + this.name);
	console.log('age = ' + this.age);
};


var lee = new Human('이승우', 20);

kim.intro();
//kim의 인스턴스가 배정된 heap 내에 intro()에서 실행
lee.intro();
// lee의 인스턴스에서 intro가 없으므로 prototype 객체를 식별
// 읽기 작업의 경우 prototype을 쫓아감


// 상속 22_inheritance.js

// 자바스크립트에서 private member로 사용하도록 구현
// 클로저 함수로 표현하여 내부 함수가 변수를 접근가능하도록 함
// 구조적으로는 내부함수이면서도 객체이므로 인스턴스 생성 시 속성이 Heap에 배정
function Rectangle(w, h){
	var width = w;
	var height = h;
	
	this.getWidth = function(){
		return width;
	};
	this.getHeight = function(){
		return height;
	};
	this.setWidth = function(w){
		width = w;
	};
	this.setHeight = function(h){
		height = h;
	};
}

function Square(length){
	this.base = Rectangle;
	this.base(length, length);
//	new 없이 호출했으므로 this가 Square의 인스턴스가 됨
}

Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;

var rectangle = new Rectangle(5, 7);
var square = new Square(5);
console.log(rectangle.getWidth() + ':' + square.getArea());





















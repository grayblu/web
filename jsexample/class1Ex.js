/**
 * 
 */

class Student{
	constructor(name, age){
		this._name = name;	// 외부에서 접근 가능 하지만 _표기를 통해 내부임을 표현
		this.age = age;
	}
	
	printProfile(){
		console.log(`이름: ${this.name}, 나이: ${this.age}`);
	}
	
	get name(){
		return this._name;
	}
	set name(name){
		this._name = name;
	}
}

var s1 = new Student('이현호', 30);
console.log(s1.name);
s1.name = '이현호1';
s1.printProfile();


// Inherit.js

class Parent{
	constructor(name){
		this.name = name;
	}
	
	print(){
		console.log('이름: ' + this.name);
	}
}

class Child extends Parent{
	constructor(name, age)
	{
		super(name);
		this.age = age;
	}
	
	print(){
		super.print();
		console.log('나이: '+this.age);
	}
	
	static sayHello(){
		console.log('Hello~');
	}
}

class GrandChild extends Child{
	constructor(name, age, address)
	{
		super(name, age);
		this.address = address;
	}
	print(){
		super.print();
		console.log('주소: ' + this.address);
	}
}

var person = new GrandChild('홍길동', 20, '서울');
person.print();
GrandChild.sayHello();






















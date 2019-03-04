/**
 * 
 */

// String

var s = '독도는 일본땅 대마도는 일본땅';

console.log('s = ' + s);
console.log('search = ' + s.search('일본땅'));
console.log('replace = ' + s.replace('일본', '한국'));

var s = '0123456789';
console.log('substring = ' + s.substring(3,6));
console.log('substr = ' + s.substr(3,6));
console.log('slice = ' + s.slice(3.6));

var music1 = '사랑과 우정 사이.mp3';
var music2 = '오직 하나뿐인 그대.mp3';

console.log('음악1 = ' + music1.slice(0,-4));
console.log('음악2 = ' + music2.slice(0,-4));

console.log('음악1 = ' + music1.slice(-3));
console.log('음악2 = ' + music2.slice(-3));

var citys = '서울,,부산,대전,광주';
var parts = citys.split(',');
// 서울 다음으로 비어있는 문자열이 출력됨
for(var city in parts){
	console.log('도시명 : ' + parts[city]);
}

var query = '?name=홍길동&age=23';

//var query1 = query.substring(1);
//
//var query2 = query1.split('&');
//
//var query3 = query2.split("=");

var params = {};
query.substring(1)
	 .split('&')
     .forEach(e=>{	// 배열 순회
    	 param = e.split('=');	// 속성명, 속성값 분리
    	 params[param[0]] = param[1]; // 객체 속성으로 추가
});


console.log(params);


//taginsert
var s = '글자의 속성';
console.log('굵게 : ' + s.bold());
console.log('기울임: ' + s.italics());
console.log('빨간색: ' + s.fontcolor('red'));
console.log('큰 글자 : ' + s.fontsize('6'));

var soen = "SoEn으로 이동";
var link = soen.link('http://www.soen.kr');
console.log(link);



// Math 객체
var tours = require('./tour.js');
const perPage = 8;

function range(end, start=0){
	var arr = [];
	for(var i=start;i<end;i++){
		arr.push(i);
	}
	return arr;
	
}
// [start, end] 범위의 난수 리턴
function random(start, end){
	return Math.floor(Math.random()*end) + start;
	
}


var totalPage = Math.ceil(tours.length/perPage);
var page = random(1, totalPage);

console.log(totalPage, page);

function toPageItem(e){
	if(e == page){
		return `<li class='page-item active'>
		<a class='page-link' href='#'>${e}</a></li>`
	}else{
		return `<li class='page-item'>
		<a class='page-link' href='#'>${e}</a></li>`
	}
}



function toPagination(items){
	return `<ul class = 'pagination'>\n${items}\n</ul>`;
}
// toPagiantion 내 태그, 속성, 객체는 다양한 형태로 정의될 수 있기에 해당 함수를 일반화 시킴.
function wrapHtml(tag,item,attrs={}){
	var arr = [];
	for(var a in attrs){
		arr.push(`${a}='${attrs[a]}'`);
	}
	var attrstr = arr.join(' ');
	
//	var attrstr = '';
//	attrstr = attrs + '=' + item;
	return `<${tag} ${attrstr}>\n${item}\n</${tag}>`;
}

var items = range(totalPage, 1)		// 페이지 번호 숫자 배열
				.map(toPageItem)	// 페이지네이션 <li> 태그 문자열 변환
				.join('\n')			// <li> 문자열 결합

//var pagination = toPagination(items);
var pagination = wrapHtml('ul',items,{'class' : 'pagination'});

console.log(pagination);


//Date 

var now  = new Date();

console.log(now);
console.log('toString: ' + now.toString());
console.log('toLocaleDateString: ' + now.toLocaleDateString());
console.log('toLocaleTimeString: ' + now.toLocaleTimeString());
console.log('toLocaleTimeString: ' + now.toLocaleString());

// dateformat.js

console.log('현재 시간은 ' +
		now.getFullYear() + '년 ' +
		(now.getMonth() + 1) + '월 ' +
		now.getDate() + '일 ' + 
		now.getHours() + ':' + 
		now.getMinutes() + '입니다');

// yyyy-MM-dd hh:mm:ss 포맷으로 변환

function twoDigitStr(n){
	return n < 10 ? '0' + n : n;
}

Date.prototype.toDateString = function(){
	var year = this.getFullYear();
	var month = twoDigitStr(this.getMonth()+1);
	var date = twoDigitStr(this.getDate());
	return `${year}-${month}-${date}`;
}

Date.prototype.toTimeString = function(){
	var hh = twoDigitStr(this.getHours());
	var mm = twoDigitStr(this.getMinutes());
	var ss = towDigitStr(this.getSeconds());

	return `${hh}:${mm}:${ss}`
}


// RegExp

var str = 'test S123 s-45 s67M S-8m s-123M';
var reg1 = new RegExp('[sS]-[0-9]*T?M');
// ResExp 객체 사용한 경우
var reg2 = /[sS]-[0-9]*T?M/;
// 리터럴 표현 시 (자주 사용)

//var result = reg.exec(str);
//console.log(result);






// searchreg.js

var str = 'test S123 s-45 s67M S-8m s-123M';
var result = str.search(/[sS]-[0-9]*T?M/);
console.log(result);

var music = '오직 하나뿐인 그대.Mp3';
var result = music.search(/\.(mp3|wav|wma|mp4)$/i);
console.log(result);

// 주민번호 확인
var str = '890629-1914920';
var result = str.search(/[0-9]{6}-[1234][0-9]{6}/);

if(result != -1){
	console.log('유효한 주민 등록 번호입니다.');
}else{
	console.log('주민 등록 번호가 올바르지 않습니다.')
}


// replaceexp.js

var str = '내가 그린 기린 그림은 암 기린을 그린 기린 그림이다.';
var result = str.replace(/기린\s/g, '코끼리');
// 기린 뒤에 스페이스로 된 문자를 찾아 코끼리로 대체
console.log(str);
console.log(result);

var count = 1;
var str = "생각이란 생각할수록 생각이 나므로 생각하지 말아야 할 생각은 " +
"생각하지 않으려고 하는 생각이 옳은 생각이라고 생각합니다.";

//result = str.replace(/생각/g, '[$&]');

var result = str.replace(/생각/g, function(value){
	return value + '(' + count++ + ')';
})
// replace 두번 째 인자인 함수에서 리턴값으로 대체함


console.log(str);
console.log('----');
console.log(result);

// 특정 단어에 링크를 걸도록 대체하는 경우
var links = {
		'네이버' : 'https://www.naver.com',
		'다음' : 'https://www.daum.net'
}

var str = '네이버와 다음은 한국의 대표적인 포털사이트입니다.';

var result = str.replace(/(네이버|다음)/g, function(site){
//	return site.link(links[site]);
	return `<a href='${links[site]}' target='_blank'>${site}</a>`;
});
console.log(result);


var filter = Object.keys(links)
					.join('|');
var reg = new RegExp(filter, 'g');
var result = str.replace(reg, function(site){
	return `<a href='${links[site]}' target='_blank'>${site}</a>`;
})
console.log(result);










































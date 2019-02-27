/**
 * 
 */

var list = require('./tour.js')

//console.log(list.length);

// region을 중복없이 추출
var set = {};
list.forEach(e=>set[e.region]=1)

var region = Object.keys(set);
console.log(region);



// suffle

//function shuffle(list){
//	var temp, random;
//	list.forEach(function(index){
//		random = parseInt(Math.random()*100);	
//		temp = list[index];
//		list[index] = list[random];
//		list[random] = temp;
//	});
//}
//
//shuffle(list);
//console.log(list);

var regions = [ '강원권', '경상권', '서울/경기권', '전라권', '제주권', '충청권' ];

Array.prototype.shuffle = function(){
	var j,x,i;
	for(i = this.length; i>0; --i){
		j = parseInt(Math.random()*i);
		x = this[i-1];
		this[i-1] = this[j];
		this[j] = x;
	}
}

var regions2 = regions.slice();
regions2.shuffle();
console.log(regions)
console.log(regions2)
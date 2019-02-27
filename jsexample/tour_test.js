/**
 * 
 */

var list = require('./tour.js')

// 지정된 권역에 해당하는 값만 추출
//var region = '경상권';
//var result = list.filter(e=>e.region===region);
//
//console.log(result);
var tours = {};

list.forEach(tour=>{
	if(!tours[tour.region]){
		tours[tour.region] = [];
	}
	tours[tour.region].push(tour);
})

var regions = Object.keys(tours);
console.log(regions);

var tourList = tours['경상권'];
console.log(tourList);

//for(var i in tourList){
//	console.log(i);
//}


// tourList를 html 표로 구성
function aaa(tour){
	return
	<tr>
		<td>${tour.region}</td>
	</tr>;
}


console.log(tourlist)






//list.forEach(e=>tour[e.region]=[])
//console.log(tour);
//
//
//
//for(var i in tour){
//	var a = list.forEach(function(){
//		i.push(e.name)
//	}=>)
//	
//}
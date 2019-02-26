/**
 * 
 */

function func(){
	if(true)
		throw '예외가 발생했습니다.';
}

try{
	func();
} catch(exception){
	console.log(exception);
}
console.log('실행을 완료하였습니다.');

/**
 * 
 */

function parseParam(query){
	var params = {};
	query.substring(1)
		.split('&')
		.forEach(e=>{
			param = e.split('=');
			params[param[0]] = param[1];
		});
	return params;
}

location.params = parseParam(location.search);

Array.prototype.shuffle = function(){
	var j,x,i;
	for(i = this.length; i > 0 ; i--){
		j = parseInt(Math.random() * i);
		x = this[i - 1];
		this[i - 1] = this[j];
		this[j] = x;
	}
	return this;
}
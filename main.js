var assert = require('assert');

module.exports = function(doc,options){
	var options = options || {};
	if(!Array.isArray(doc)){ return false;}
	var shape = {};
	doc.forEach(el=>{
		var keys = Object.keys(el);
		keys.forEach(k=>{
			if(!shape.hasOwnProperty(k)){
				shape[k] = [typeof el[k]]
			} else {
				if(shape[k].indexOf(typeof el[k]) === -1){
					shape[k].push(typeof el[k]);
				}
			}
		})	
	})	
	return shape;
}

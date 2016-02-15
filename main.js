var assert = require('assert');

module.exports = function(doc,options){
	var options = options || {};
	if(!Array.isArray(doc)){ return false;}
	var shape = {};
	var allKeys = new Set();
	doc.forEach(el=>{
		var keys = Object.keys(el);
		keys.forEach(k=>{
			allKeys.add(k);
			shape[k] = shape[k] || new Set();
			if(!el[k]) shape[k].add('undefined');
			else if(Array.isArray(el[k])) shape[k].add('array');
			else shape[k].add(typeof el[k]);
		})
	})
	doc.forEach(el=>{
		allKeys.forEach(k=>{
			if(!el[k]){
				shape[k].add('optional')
			}
		})
	})
	return shape;
}

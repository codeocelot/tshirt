var shape = require('./main.js');
var assert = require('assert');

describe('doc shape',()=>{
	it('should not allow an object',()=>{
		assert(!shape({}))
	});
	it('simple example',()=>{
		var res = shape([{a:'b'}]);
		console.log(res);
		assert( res === Object(res));
	});
	it('bigger test',()=>{
		var res = shape(
			[
				{a:1},
				{a:2},
				{b:2},
				{a:2,b:3},
			]
		)
		console.log(res);
	}),
	it('even bigger',()=>{
		var res = shape(
			[
				{a:1,b:2,c:3},
				{b:2},
				{b:'elephant'},
				{b:null},
				{c:null,d:'asdf'},
				{a:[]},
				{a:{}},
				{z:'asdf'},
				{a:null},
				{}
			]
		);
		assert( res === Object(res));
		assert( Object.keys(res).length === 5);
		console.log(res);
	}),
	it('report optional properties',()=>{
		var res = shape(
			[
				{b:1},
				{a:1,b:2}
			]
		);
		assert( res === Object(res));
		assert(res['a'].has('optional'));
		assert(!res['b'].has('optional'))
		// assert( Object.keys(res).length === 5);
		console.log(res);
	})
});

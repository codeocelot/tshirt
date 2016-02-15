#tshirt

## How to use
var tshirt = require('tshirt');
var data = [
	{a:1},
	{a:'one',b:4,c:{},d:[]},
	{},
	{b:42},
]
var shape = tshirt(data);
console.log(shape);

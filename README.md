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
  /*
  {
    a: Set { 'number', 'string' },
    b: Set { 'number' },
    c: Set { 'object' },
    d: Set { 'array' }
  }
  */

## Use case inspiration
It sucks opening a 500mb list of objects and manually enumerate the data types for each property.  Tshirt solves this by determining the shape of your documents.  

## Improvements
Support nested properties.

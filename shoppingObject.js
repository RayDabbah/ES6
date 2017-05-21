

var fs = require('fs');
var output = fs.readFileSync('shop.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split("\t"))
.reduce((customer, line) => {
	customer[line[0]] = [];
	return customer;
	}, {})


console.log(output);
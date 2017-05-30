

var fs = require('fs');
var output = fs.readFileSync('shop.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split("\t"))
.reduce((customer, line) => {
	customer[line[0]] = customer[line[0]] || [];
	customer[line[0]].push({
		Item: line[1], 
		Price: line[2],
		Quantity: line[3]
	});
	return customer;
	}, {});


console.log(JSON.stringify(output, null, 2));
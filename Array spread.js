var numbers = [1,2,3, 4];

var numbers2 = [5,6,7,8];

numbers.push(...numbers2);
console.log(`With numbers.push(...numbers2): 
	 `, numbers)
numbers.push(numbers2);
console.log(`After pushing without spread: 

	`, numbers);


var sum = (a,b,c,d)=> a + b + c + d;

console.log(`function without spread:
	 ${sum(numbers)}`);
console.log(`function with spread:
	 ${sum(...numbers)}`);

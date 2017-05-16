var numbers = [1,2,3, 4,];

var numbers2 = [5,6,7,8];

numbers.push(...numbers2);
numbers.push(numbers2);
console.log(numbers);

var sum = (a,b,c,d)=> a + b + c + d;

console.log(sum(...numbers));
console.log(sum(...numbers2));
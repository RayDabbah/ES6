//Arrays
var people = ['Moshe', 'Yankel', 'Shmerel', 'Berel'];

var [blla,,blooh] = people;

console.log(blooh);
console.log(blla);

//Objects

var morePeople = [
                  {
    name: 'Moshe',
    age: 54,
    hair: 'black'
},
{
    name: 'Yankel',
    age: 76,
    hair: 'blond'
},
{
    name: 'Shmerel',
    age: 32,
    hair: 'brown'
},
{
    name: 'Berel',
    age: 20,
    hair: 'red'
}
];
//log out all hair colors from the destructured objects
morePeople.forEach(({hair}) => console.log(hair));
//destructure the array of objects
var [, second,, fourth] = morePeople;
console.log(second.age);
console.log(fourth.name);
//destructuring the objects within the destructured array
var namesOnly = ({name}) => (console.log(name));
namesOnly(fourth);
namesOnly(second);

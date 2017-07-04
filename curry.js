
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
			name: "Shmerel",
			age: 32,
			hair: 'brown'
		},
		{
			name: 'Berel',
			age: 20,
	                hair: 'red'
		}
    ];
var hasElement =
		(element, obj) => obj === element;
var filtering =
		morePeople.filter(person => hasElement("Yankel", person.name));

console.log(filtering);
console.log(hasElement('black', morePeople[0].hair));
console.log(morePeople[0].hair);

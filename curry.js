
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
		(element, obj) => obj.element == element;
var red =
		morePeople.filter(x => hasElement("Shmerel", x.name));

console.log(red);
console.log(hasElement('black', morePeople[0].hair));
console.log(morePeople[0].hair);
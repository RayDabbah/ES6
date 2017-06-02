//es5 syntax- this is contained in the function
people = {
    language: 'English',
    speech: function() {
        console.log(this.language);
    }
};
people.speech();
let detachedPerson = people.speech;
let boundPerson = detachedPerson.bind(people);
detachedPerson();
boundPerson();
detachedPerson.call(people);
detachedPerson.apply(people);
//es6 syntax- this is global even though it's in a function

people2 = {
    language: 'English',
    speech: () => console.log(this.language)
};

people2.speech();

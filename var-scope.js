//This is to show how scoping works in ES5. if you redefine it in a function without 'var' it becomes global once th function is called.
//with 'var' it remains local

var foo =  'tony';

function rename() {
     var foo = 'shmerel';
    return foo;
}

console.log(foo);

rename();

console.log(foo);
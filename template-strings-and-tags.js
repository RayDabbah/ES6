function tag(strings, values) {
    if (values[0].split(':')[0] <= 10) {
      values[1] = 'awake';  
    } if (values[0].split(':')[0] > 10){
        values[1] = 'tired';
    }
    console.log(values[0].split(':')[0]);
   console.log(values);
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}${strings[2]}`;
}

var message = tag`Hello! It's ${new Date().toLocaleTimeString()}, so I'm ${''} now.`;

console.log(message);
var stringy = 'this is a string';
console.log('new item: ' + stringy[2]);

//doing it like the video

function sleepy(strin, val) {
    if (val[0] <= 18) {
        val[1] = 'awake and full of energy!';
    } else {
        val[1] = 'very tired and sleepy.';
    }
    console.log(val);
    return `${strin[0]}${val[0]}${strin[1]}${val[1]}${strin[2]}`;
}
var message2 = sleepy`Hello, it's now ${new Date(2017, 06, 21, 20).getHours()} and I am therefore ${''}`;
console.log(message2);
console.log('' + new Date().getHours());

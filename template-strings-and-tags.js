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

var message = tag`Hello! It's ${new Date().toTimeString()}, so I'm ${''} now.`;

console.log(message);

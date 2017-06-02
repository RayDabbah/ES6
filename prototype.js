function noises() {
   console.log(this.noise);
   // console.log(this);
}

var truck = {
    noise: "Vrooom!!!",
    sounds:  noises,
};

truck.sounds();

var car = {
    noise: 'beep'
};
var tractor = {
    roar: function() {
        console.log(this.noise.toUpperCase());
    }
};
Object.setPrototypeOf(car, truck);
Object.setPrototypeOf(tractor, truck);
car.sounds();
//console.log(car);
tractor.roar();
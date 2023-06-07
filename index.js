console.clear();
import { Dog } from "./js/Dog.js";
import { Car } from "./js/Car.js";


const rexas = new Dog('Rexas', 'black');
console.log(rexas.state);

rexas.atsistok();
console.log(rexas.state);

rexas.gulk();
console.log(rexas.state);

rexas.gimtadienis();
rexas.gimtadienis();
rexas.gimtadienis();
console.log(rexas);

console.clear();

const bulka = new Car('Audi', '80', 'red', 800, 60);
console.log(bulka);

console.log(bulka.engineStart());
console.log(bulka.engineStart());
console.log(bulka.engineStop());
console.log(bulka.engineStop());
console.log(bulka.engineStart());
console.log(bulka.engineStop());

console.log(bulka.fillTank(25));
console.log(bulka.fillTank(25));
console.log(bulka.fillTank(30));
console.log(bulka.fillTank(30));

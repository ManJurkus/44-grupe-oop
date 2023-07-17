import { Shop } from "./js/Shop.js";

console.clear();

const kioskas = new Shop('Kompas', 'Eur');

console.log(kioskas.intro());
console.log(kioskas.summary());

const [err0, msg0] = kioskas.addProduct('Svogunas', 6, 66, 666);
console.log(err0, msg0);
const [err1, msg1] = kioskas.addProduct('Labai raudonas pomidoras', 1, 2, 10);
console.log(err1, msg1);
const [err2, msg2] = kioskas.addProduct('Agurkas', 0.5, 1.5, 20);
console.log(err2, msg2);

const [err3, msg3] = kioskas.sellProduct(999, 5);
console.log(err3, msg3);
const [err4, msg4] = kioskas.sellProduct(2, 25);
console.log(err4, msg4);
const [err5, msg5] = kioskas.sellProduct(2, 5);
console.log(err5, msg5);
const [err6, msg6] = kioskas.dropProduct(1);
console.log(err6, msg6);
const [err7, msg7] = kioskas.fillInventor(1, 50);
console.log(err7, msg7);

console.log(kioskas.inventor);
// console.log(kioskas.summary());

const [err8, msg8] = kioskas.findProductById(2);
console.log(err8, msg8);


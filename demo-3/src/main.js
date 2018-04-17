import {sayHello} from './modules/greeting';
import {product, sum} from './modules/math';

const resultGreeting = document.getElementById('resultGreeting');
const resultSum = document.getElementById('resultSum');
const resultProduct = document.getElementById('resultProduct');

const a = 3;
const b = 7;

resultGreeting.textContent = sayHello('Nice to see you!');
resultSum.textContent = `The sum of ${a} and ${b} is ${sum(a, b)}.`;
resultProduct.textContent = `The product of ${a} and ${b} is ${product(a, b)}.`;
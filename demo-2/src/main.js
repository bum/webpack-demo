import {sayHello} from './modules/greeting';
import {product, sum} from './modules/math';

var a = 3, b = 7;

document.getElementById('resultGreeting').textContent = sayHello('Nice to see you!');
document.getElementById('resultSum').textContent = 'The sum of ' + a + ' and ' + b + ' is ' + sum(a, b) + '.';
document.getElementById('resultProduct').textContent = 'The product of ' + a + ' and ' + b + ' is ' + product(a, b) + '.';
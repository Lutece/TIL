import { plus } from './calculatorFunction.js';
function component() {
    var element = document.createElement('pre');
    element.innerHTML = 'result is ' + plus(1,2);

    return element;
}

document.body.appendChild(component());
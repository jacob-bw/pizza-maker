//order doesn't matter functionally, but alphabetically helps make it easier to navigate
import cheese from './cheese.js';
import utilities from '../helpers/utilities.js'

const createFinalOrder = (items) => {
    let domString2 = '';
    for(let i = 0; i < items.length; i++){
        domString2 += `<h2>${items[i].name}</h2>`;
    }
    utilities.printToDom(domString2, 'final-order');
}

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    createFinalOrder(selectedCheeses);
}

const printOrderButton = () => {
    const domString = '<button id="order-button" class="btn btn-success">Make Pizza</button>'
    utilities.printToDom(domString, 'final-order');
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};

export default { printOrderButton }
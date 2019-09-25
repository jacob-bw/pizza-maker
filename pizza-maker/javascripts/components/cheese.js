import utilities from '../helpers/utilities.js';

const cheeses = [
    {id:"cheese1", name: "mozz", price: 50},
    {id:"cheese2", name: "parm", price: 75},
    {id:"cheese3", name: "feta", price: 200},
    {id:"cheese4", name: "goat", price: 150},
]

const getSelectedCheeses = () => {
    const selectedCheeses = [];
    
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    
    for (let j = 0; j <cheeseCheckboxes.length; j++) {
        for (let k = 0; k < cheeses.length; k++) {
            if(cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheeses[k].id){
                selectedCheeses.push(cheeses[k]);
            }
        }
    }
    return selectedCheeses;
}

const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++){
    domString += `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
    <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
    </div>
    `;
    }

    utilities.printToDom(domString, 'cheese-counter');
};

export default { printCheeseOptions, getSelectedCheeses }
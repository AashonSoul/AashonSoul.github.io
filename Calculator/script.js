console.log("This is the combined project");

let string = "";
let buttons = document.querySelectorAll('.input-button');

//Printing the value by clicking the buttons
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        element = e.target
        string = element.value;
        let zero = document.getElementById('zero');
        let period = document.getElementById('decimal')
        let input = document.querySelector('#input').value
        if(element == zero && input =='0'){
            document.querySelector('#input').value != string;
        }
        else if(element == period && input=='.'){
            document.querySelector('#input').value != string;
        }
        else{
            document.querySelector('#input').value += string;
        }
    })
});

//Equal button for printing the output
let equ = document.querySelector('#equal');
equ.addEventListener('click', () => {
    let input = document.querySelector('#input').value
    let evaluated;
    if(input.includes('.')){
        evaluated = parseFloat(eval(input));
        document.querySelector('#input').value = evaluated;
    }
    else {
        evaluated = eval(input);
        document.querySelector('#input').value = evaluated;
    }
});

//All Clear button for clearing the output
let ac = document.querySelector('#clear');
ac.addEventListener('click', () => {
    document.querySelector('#input').value = '';
});

//Delete button for Clearing one value from the input
let del = document.querySelector('#erase');
del.addEventListener('click', () => {
    let input = document.querySelector('#input').value
    sliced = (input.slice(0, -1))
    document.querySelector('#input').value = sliced;
});
const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
const changeGrid = document.querySelector('.changeGrid');

resetButton.textContent = 'Reset';
changeGrid.textContent = 'Change Grid';

resetButton.classList.add('reset');
changeGrid.classList.add('changeGrid');


function createColumn(){
    const column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);
    return column;
};

function createRow(column){
    const row = document.createElement('div');
    row.classList.add('row');
    column.appendChild(row);

    row.addEventListener('mouseover', () => {
        row.classList.add('row-color');
    });

    resetButton.addEventListener('click', () => {
        row.classList.toggle('row-color', false);
    });
};

function createGrid(size){
    for(let i = 0; i < size; i++){
        const column = createColumn();
    
        for(let j = 0; j <  size; j++){
            createRow(column);
        }
    }
};

createGrid(16);


changeGrid.addEventListener('click', () =>{
    const value = window.prompt('Enter a grid size between 1 and 100');
    const parseValue = parseInt(value);

    if(value === null || isNaN(parseValue)){
        alert('You must enter a number!')
    } else if (parseValue < 1 || parseValue > 100){
        alert('Error! Enter a number between 1 and 100');
    } else {
        container.innerHTML = '';
        createGrid(parseValue);
    }
});



const 
    optView = document.querySelector('.opt-view'),
    imgArrowDown = document.querySelector('.opt-view img'),
    optionsDisplay = document.querySelector('.options-display'),
    configDisplay= document.querySelector('.config-display'),
    continueButton = document.querySelector('.continue-btn'),
    tableDisplay = document.querySelector('.tablesOrganizer'),
    tablesOrganizer = document.querySelector('.tablesOrganizer');

(function (){
    optionsDisplay.classList.add('view');
    tableDisplay.style.display = 'none';
    tablesOrganizer.innerHTML = `
        <div class="table">
        <div class="rows">
            <div class="row-insert"><span></span></div>
        </div>
        <span class="reload"><a href="index.html"> <img src="./assets/img/refresh.svg" alt=""> Fazer outra operação</a></span>
        </div>
    `
}())

optView.addEventListener('click', ()=>{
    !imgArrowDown.classList.contains('arrowDown') ? imgArrowDown.classList.add('arrowDown') : imgArrowDown.classList.remove('arrowDown')

    optionsDisplay.classList.contains('view') ? optionsDisplay.classList.remove('view') : optionsDisplay.classList.add('view')
})

const numberInput = document.querySelector('#table-number');
const inputsTable = document.querySelector('.inputs-table');
const rows = document.querySelector('.rows');
const maxNumber = document.querySelector('#max-number');

continueButton.addEventListener('click', ()=>{
    let number = numberInput.value;
    let variance = 10;
    if(numberInput.value == ''){
        inputsTable.innerHTML += '<span class="error-input">Erro - insira caracteres válidos!<br>Por favor renicie 😩</span>';
    }else if(!(numberInput.value == '')){
        configDisplay.classList.add('view');
        tableDisplay.style.display = 'flex';
        if(maxNumber.value == '') variance = 10
        else if(!(maxNumber.value == ''))variance = maxNumber.value;

        for(let i = 0; i <= variance; i++){
            let result = number*i;
            rows.innerHTML += `
            <div class="row-insert"><span>${number} x ${i} = ${result}</span></div>
            `
        }
    }
})






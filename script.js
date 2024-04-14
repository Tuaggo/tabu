const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-table");

const createTable = (number, multiplicator) => {
    multiplicationTable.innerHTML = `<h2>Tabuada do número ${number}</h2>`;
    for (let i = 1; i <= multiplicator; i++) {
        multiplicationTable.innerHTML += `<p>${number} x ${i} = ${number * i}</p>`;
    }
};

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) {
        alert("Por favor, preencha os campos corretamente.");
        return;
    }

    createTable(multiplicationNumber, multiplicatorNumber);
});

const form = document.getElementById("calcForm");
const error = document.getElementById("error");
const historyList = document.getElementById("history");

let operations = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const op = document.getElementById("op").value;

    error.textContent = "";

    if (a === "" || b === "") {
        error.textContent = "Tous les champs sont obligatoires";
        return;
    }

    if (op === "/" && b == 0) {
        error.textContent = "Division par zéro interdite";
        return;
    }

    let result;
    switch (op) {
        case "+": result = Number(a) + Number(b); break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
    }

    const operationText = `${a} ${op} ${b} = ${result}`;
    operations.push(operationText);

    updateHistory();
});

function updateHistory() {
    historyList.innerHTML = "";
    operations.forEach(op => {
        const li = document.createElement("li");
        li.textContent = op;
        historyList.appendChild(li);
    });
}

let inputs = document.getElementById('input');
let text = document.querySelector('.text');

function add() {
    if (inputs.value == " ") {
        alert(" Please enter your task");
    }
    else {
        let newelement = document.createElement("ul");
        newelement.innerHTML = `${inputs.value} <button>X</button>`;
        text.appendChild(newelement);
        inputs.value = ' ';
        newelement.querySelector("button").addEventListener("click", remove)
        function remove() {
            newelement.remove();
        }
    }

}

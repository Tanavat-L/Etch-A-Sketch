
let container = document.querySelector(".container");


for(let i = 0; i<16; i++){
    let row = document.createElement("div");
    row.className = "row";
    row.style.cssText = "display: flex; flex: 1 1 auto;"
    for(let j = 0; j<16; j++){
        let column = document.createElement("div");
        column.className = "column";
        column.textContent = "a";
        column.style.cssText = "flex: 1 1 auto; aspect-ratio: 1/1;"
        row.appendChild(column);
    }
    container.appendChild(row);
}

let columns = document.querySelectorAll(".column");

for(let i = 0; i<columns.length; i++){
    columns[i].addEventListener("mouseover", (event) => {
        let target = event.target;
        target.style.backgroundColor = "black";
    })
}
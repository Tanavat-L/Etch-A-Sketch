
let container = document.querySelector(".container");


for(let i = 0; i<16; i++){
    let row = document.createElement("div");
    row.className = "row";
    row.style.cssText = "display: flex; flex:1 1 0;"
    for(let j = 0; j<16; j++){
        let column = document.createElement("div");
        column.className = "column";
        column.textContent = "a";
        column.style.cssText = "flex: 1 1 0;"
        row.appendChild(column);
    }
    container.appendChild(row);
}

let row = document.querySelectorAll(".row");
container.style.cssText = "display: flex; flex-direction: column;"

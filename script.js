
let container = document.querySelector(".container");
let currentX = 16;
let currentY = 16;

function makeGrid(size){
    for(let i = 0; i<size; i++){
        let row = document.createElement("div");
        row.className = "row";
        row.style.cssText = "display: flex; flex: 1 1 auto;"
        for(let j = 0; j<size; j++){
            let column = document.createElement("div");
            column.className = "column";
            column.style.cssText = "flex: 1 1 auto; aspect-ratio: 1/1; border: 1px solid black; background-color:white;"
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}

makeGrid(16);
addPixelColorChange();
addSizeChangeButton();

function addPixelColorChange(){
    let columns = document.querySelectorAll(".column");
    for(let i = 0; i<columns.length; i++){
        columns[i].addEventListener("mouseover", (event) => {
            let target = event.target;
            target.style.backgroundColor = "black";
        })
    }
}

function addSizeChangeButton(){
    let buttonWrapper = document.createElement("div");
    let firstRow = document.querySelector(".row");
    let button = document.createElement("button");
    button.textContent = "Change grid size";
    button.classText= "grid-size";
    buttonWrapper.appendChild(button);
    container.insertBefore(buttonWrapper,firstRow);
    buttonWrapper.style.cssText="display:flex; justify-content: center; align-item: center; margin: 50px;";
    buttonWrapper.style.cssText+="font-size: 100px;"
    button.addEventListener("click", (event) => {
    let size = +prompt("How many pixel wide/tall? (Max 100px)");
    container.innerHTML = "";
    makeGrid(size);
    addPixelColorChange();
    addSizeChangeButton();
    current = size;
})

}
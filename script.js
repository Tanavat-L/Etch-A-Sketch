
let container = document.querySelector(".container");
let currentSize = 16;
let currentColor = "black";
let temp;

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
    addButtons();
}

makeGrid(16);
addPixelColorChange(currentColor);

function addPixelColorChange(color){
    let columns = document.querySelectorAll(".column");
    for(let i = 0; i<columns.length; i++){
        columns[i].addEventListener("mouseover", (event) => {
            let target = event.target;
            if(color == "black"){
                target.style.backgroundColor = "black";
            }
            else if (color == "rgb"){
                let red = Math.round((Math.random()*255));
                temp = red;
                let blue = Math.round((Math.random()*255));
                let green = Math.round((Math.random()*255));
                target.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
            }
        })
    }
}

function addButtons(){
    let buttonWrapper = document.createElement("div");
    let firstRow = document.querySelector(".row");
    buttonWrapper.style.cssText="display:flex; justify-content: center; align-item: center; margin: 50px; gap: 10px";
    container.insertBefore(buttonWrapper,firstRow);
    addSizeChangeButton(buttonWrapper);
    addClearButton(buttonWrapper);
    addRGBButton(buttonWrapper);
    addBlackButton(buttonWrapper);
}

function addSizeChangeButton(wrapper){
    let button = document.createElement("button");
    button.textContent = "Change grid size";
    button.classText= "change-size-button";
    button.style.fontSize = "25px";
    wrapper.appendChild(button);
    button.addEventListener("click", (event) => {
        let size = +prompt("How many pixel wide/tall? (Max 100px)");
        if(typeof(size) === typeof(1) && size <= 100 && size > 0){
            container.innerHTML = "";
            makeGrid(size);
            addPixelColorChange(currentColor);
            currentSize = size;
        }
        else{
            alert("Enter a valid number");
        }
    })
}

function addClearButton(wrapper){
    let button = document.createElement("button");
    button.textContent = "Clear";
    button.classText= "clear-button";
    button.style.fontSize = "25px";
    wrapper.appendChild(button);
    button.addEventListener("click", (event) => {
        container.innerHTML = "";
        makeGrid(currentSize);
        addPixelColorChange(currentColor);
    })
}

function addRGBButton(wrapper){
    let button = document.createElement("button");
    button.textContent = "RGB Mode";
    button.classText= "rgb-button";
    button.style.fontSize = "25px";
    wrapper.appendChild(button);
    button.addEventListener("click", (event) => {
        currentColor = "rgb";
        addPixelColorChange(currentColor);
    })
}

function addBlackButton(wrapper){
    let button = document.createElement("button");
    button.textContent = "Black Mode";
    button.classText= "black-button";
    button.style.fontSize = "25px";
    wrapper.appendChild(button);
    button.addEventListener("click", (event) => {
        currentColor = "black";
        addPixelColorChange(currentColor);
    })
}
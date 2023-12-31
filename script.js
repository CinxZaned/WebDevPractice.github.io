// Modal Window
// Get the modal
var modal = document.getElementsByClassName('window-bg')[0];
var theWindowA = document.getElementById('window-a');

var header = document.getElementsByClassName('window-header')[0];

var btnOpenModal = document.getElementById('set-dim');

btnOpenModal.onclick = function() {
    modal.style.display = 'flex';
    generateTableA();
    generateTableB();
}

var btnCloseWindow = document.getElementsByClassName('close')[0];

btnCloseWindow.onclick = function() {
    modal.style.display = 'none';
}

// Variables to keep track of the mouse position
var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

// Function to start dragging
function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
}

// Function to drag the modal
function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    theWindowA.style.top = (theWindowA.offsetTop - pos2) + "px";
    theWindowA.style.left = (theWindowA.offsetLeft - pos1) + "px";
}

// Function to stop dragging
function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
}

// Attach the event listener for dragging to the header of the modal
header.onmousedown = dragMouseDown;

// Multiplication
// ColA = RowB
var colA = document.getElementById("y1");
var rowB = document.getElementById("x2");

colA.addEventListener("change", updateRowB);
rowB.addEventListener("change", updateColA);

function updateRowB() {
    if (colA.value !== rowB.value) {
        rowB.value = colA.value;
    }
}

function updateColA() {
    if (rowB.value !== colA.value) {
        colA.value = rowB.value;
    }
}

// -----------generate table----------

let tableA = document.getElementById('tableA');
let tableB = document.getElementById('tableB');
let rowA = document.getElementById('x1');
let colB = document.getElementById('y2');

function generateTableA() {
    tableA.innerHTML = "";

    for(var i=0; i<(rowA.value-(-1)); i++) {
        let tRowA = document.createElement('tr');

        for(var j=0; j<(colA.value-(-1)); j++) {
            let cellA = document.createElement('td');
            cellA.textContent = "Row " + (i + 1) + ", Col " + (j + 1);
            tRowA.appendChild(cellA);
        }

        tableA.appendChild(tRowA);
    }
}

function generateTableB() {
    tableB.innerHTML = "";

    for(var i=0; i<(rowB.value-(-1)); i++) {
        let tRowB = document.createElement('tr');

        for(var j=0; j<(colB.value-(-1)); j++) {
            let cellB = document.createElement('td');
            cellB.textContent = "Row " + (i + 1) + ", Col " + (j + 1);
            tRowB.appendChild(cellB);
        }

        tableB.appendChild(tRowB);
    }
}

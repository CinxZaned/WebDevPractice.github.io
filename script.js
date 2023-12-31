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
        let tRowA;

        if (i==0) {
            let tRowHead = document.createElement('tr');

            for(var j=0; j<(colA.value-(-1)); j++) {
                let tHeadA = document.createElement('th');
                tHeadA.textContent = "th";
                tRowHead.appendChild(tHeadA);
            }
            tableA.appendChild(tRowHead);

        } else {
            tRowA = document.createElement('tr');

            for(var j=0; j<(colA.value-(-1)); j++) {
                if (j==0) {
                    let tRowHeadChild = document.createElement('th');
                    tRowHeadChild.textContent = "th";
                    tRowA.appendChild(tRowHeadChild);
                } else {
                    let cellA = document.createElement('td');
                    let inputMatA = document.createElement('input');
                    inputMatA.type = "text";
                    inputMatA.name = "matA"+i+j;
                    inputMatA.className = "inputMatA";
                    inputMatA.title = `[${i},${j}]`;
                    cellA.appendChild(inputMatA);
                    tRowA.appendChild(cellA);
                }
            }
            tableA.appendChild(tRowA);
        }
    }
}

function generateTableB() {
    tableB.innerHTML = "";

    for(var i=0; i<(rowB.value-(-1)); i++) {
        let tRowB;

        if (i==0) {
            let tRowHead = document.createElement('tr');

            for(var j=0; j<(colB.value-(-1)); j++) {
                let tHeadB = document.createElement('th');
                tHeadB.textContent = "th";
                tRowHead.appendChild(tHeadB);
            }
            tableB.appendChild(tRowHead);

        } else {
            tRowB = document.createElement('tr');

            for(var j=0; j<(colB.value-(-1)); j++) {
                if (j==0) {
                    let tRowHeadChild = document.createElement('th');
                    tRowHeadChild.textContent = "th";
                    tRowB.appendChild(tRowHeadChild);
                } else {
                    let cellB = document.createElement('td');
                    
                    cellB.textContent = "td";
                    tRowB.appendChild(cellB);
                }
            }
            tableB.appendChild(tRowB);
        }
    }
}

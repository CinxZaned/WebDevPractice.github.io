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
                if(j != 0) {
                    let colNumA = document.createElement('span');
                    colNumA.className = "subIndex";
                    colNumA.textContent = `${j}`;
                    tHeadA.textContent = "A";
                    tHeadA.appendChild(colNumA);
                    tRowHead.appendChild(tHeadA);
                } else {
                    tRowHead.appendChild(tHeadA);
                }
            }
            tableA.appendChild(tRowHead);

        } else {
            tRowA = document.createElement('tr');

            for(var j=0; j<(colA.value-(-1)); j++) {
                if (j==0) {
                    let tRowHeadChild = document.createElement('th');
                    tRowHeadChild.textContent = `${i}`;
                    tRowA.appendChild(tRowHeadChild);
                } else {
                    let cellA = document.createElement('td');
                    let inputMatA = document.createElement('input');
                    inputMatA.type = "text";
                    inputMatA.name = `matA[${i-1}][${j-1}]`;
                    inputMatA.className = "inputMatA";
                    inputMatA.title = `[${i},${j}]`;
                    inputMatA.id = "matA"+i+j;
                    inputMatA.autocomplete = "off";
                    inputMatA.pattern = "[0-9/.]*";
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
                if(j != 0) {
                    let colNumB = document.createElement('span');
                    colNumB.className = "subIndex";
                    colNumB.textContent = `${j}`;
                    tHeadB.textContent = "B";
                    tHeadB.appendChild(colNumB);
                    tRowHead.appendChild(tHeadB);
                } else {
                    tRowHead.appendChild(tHeadB);
                }
            }
            tableB.appendChild(tRowHead);

        } else {
            tRowB = document.createElement('tr');

            for(var j=0; j<(colB.value-(-1)); j++) {
                if (j==0) {
                    let tRowHeadChild = document.createElement('th');
                    tRowHeadChild.textContent = `${i}`;
                    tRowB.appendChild(tRowHeadChild);
                } else {
                    let cellB = document.createElement('td');
                    let inputMatB = document.createElement('input');
                    inputMatB.type = "text";
                    inputMatB.name = `matB[${i-1}][${j-1}]`;
                    inputMatB.id = "matB"+i+j;
                    inputMatB.className = "inputMatB";
                    inputMatB.title = `[${i},${j}]`;
                    inputMatB.autocomplete = "off";
                    inputMatB.pattern = "[0-9/.]*";
                    cellB.appendChild(inputMatB);
                    tRowB.appendChild(cellB);
                }
            }
            tableB.appendChild(tRowB);
        }
    }
}

// ------------fill zero into empty cells-----------------

let fillZeroB = document.getElementById('fill-zeroB');
let fillZeroA = document.getElementById('fill-zeroA');

fillZeroA.onclick = function() {
    zeroA();
}

fillZeroB.onclick = function() {
    zeroB();
}

function zeroA() {
    for (var i=1; i<rowA.value-(-1); i++) {
        for (var j=1; j<colA.value-(-1); j++) {
            var inputIdA = document.getElementById(`matA${i}${j}`);

            if (inputIdA.value === '') {
                inputIdA.value = '0';
            }
            
        }
    }
}

function zeroB() {
    for (var i=1; i<rowB.value-(-1); i++) {
        for (var j=1; j<colB.value-(-1); j++) {
            var inputIdB = document.getElementById(`matB${i}${j}`);

            if (inputIdB.value === '') {
                inputIdB.value = '0';
            }
            
        }
    }
}

// ---------------calculate Multiplication-----------------

document.getElementById('another-btn').addEventListener('click', function() {
    window.location.reload();
});

let btnCalculate = document.getElementById('calculate');
let dimInput = document.getElementById('dim-input');
let resultSec = document.getElementById('result-section');
let theResult = document.getElementById('the-result');

btnCalculate.onclick = function() {
    replaceResult();
    createTableResult();
    displayResult();
    

}

function replaceResult() {
    dimInput.style.display = 'none';
    resultSec.style.display = 'block';
    resultSec.style.zIndex = '10';
    modal.style.display = 'none';
}

function createTableResult() {
    let resultTbl = document.createElement('table');
    resultTbl.className = 'table-result';
    resultTbl.id = 'table-result';
    resultTbl.innerHTML = '';

    for(var i=0; i<(rowA.value-(-1)); i++) {
        let tRowR;

        if (i==0) {
            let tRowHead = document.createElement('tr');

            for(var j=0; j<(colB.value-(-1)); j++) {
                let tHeadR = document.createElement('th');
                if(j != 0) {
                    let colNumR = document.createElement('span');
                    colNumR.className = "subIndex";
                    colNumR.textContent = `${j}`;
                    tHeadR.textContent = "C";
                    tHeadR.appendChild(colNumR);
                    tRowHead.appendChild(tHeadR);
                } else {
                    tRowHead.appendChild(tHeadR);
                }
            }
            resultTbl.appendChild(tRowHead);

        } else {
            tRowR = document.createElement('tr');

            for(var j=0; j<(colB.value-(-1)); j++) {
                if (j==0) {
                    let tRowHeadChild = document.createElement('th');
                    tRowHeadChild.textContent = `${i}`;
                    tRowR.appendChild(tRowHeadChild);
                } else {
                    let cellR = document.createElement('td');
                    cellR.title = `[${i},${j}]`;
                    cellR.className = "resultCell";
                    tRowR.appendChild(cellR);
                }
            }
            resultTbl.appendChild(tRowR);
        }
    }
    theResult.appendChild(resultTbl);
}

function displayResult() {
    let result = multiplyMatrices();

    let resultCell = document.getElementsByClassName('resultCell');
    let cellIndex = 0;

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            resultCell[cellIndex].textContent = result[i][j];
            cellIndex++;
        }
    }

}

function getInputMatricesA() {
    let matInputA = document.getElementsByClassName('inputMatA');
    let matA = [];

    let row = [];
    for (let i = 0; i < matInputA.length; i++) {
        const val = parseFloat(matInputA[i].value);

        row.push(val);

        // Break into a new row after every 'cols' number of inputs
        if ((i + 1) % colA.value === 0) { // Change '3' to the number of columns
            matA.push(row);
            row = [];
        }
    }

    return matA;
}

function getInputMatricesB() {
    let matInputB = document.getElementsByClassName('inputMatB');
    let matB = [];

    let row = [];
    for (let i = 0; i < matInputB.length; i++) {
        const val = parseFloat(matInputB[i].value);

        row.push(val);

        // Break into a new row after every 'cols' number of inputs
        if ((i + 1) % colB.value === 0) { // Change '3' to the number of columns
            matB.push(row);
            row = [];
        }
    }

    return matB;
}

function multiplyMatrices() {
    const matrixA = getInputMatricesA();
    const matrixB = getInputMatricesB();

    const resultMatrix = matrixMultiplication(matrixA, matrixB);
    return resultMatrix;
}

function matrixMultiplication(matrix1, matrix2) {
    const rowsA = matrix1.length;
    let colsA = matrix1[0].length;
    const rowsB = matrix2.length;
    const colsB = matrix2[0].length;

    let result = new Array(rowsA); // Create a new array to store the result

    for (let i = 0; i < rowsA; i++) {
        result[i] = new Array(colsB).fill(0);
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

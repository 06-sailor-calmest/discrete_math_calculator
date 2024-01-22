// class Matrix {
//     constructor(row, column) {
//         this.row = row;
//         this.column = column;
//         this.matrix = [];
//     }
    
//     add(otherM) {
//         temp = [];
//         for(let i = 0; i < this.row; i++) {
//             for(let j = 0; j < this.column; j++) {
//                 temp[i][j] = matrix[i][j] + otherM
//             }
//         }

//         return 
//     }

//     subtract() {
//     }
// }



function add(m1, m2) {
    let row = m1.length;
    let column = m1[0].length;
    let temp = Array(row).fill(0).map(() => Array(column));
    
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            temp[i][j] = m1[i][j] + m2[i][j];
        }
    }

    return temp;
}

function subtract(m1, m2) {
    let row = m1.length;
    let column = m1[0].length;
    let temp = Array(row).fill(0).map(() => Array(column));

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            temp[i][j] = m1[i][j] - m2[i][j];
        }
    }

    return temp;
}

function multiplication(m1, m2) {
    let row = m1.length;
    let column = m2[0].length;
    let temp = Array(row).fill(0).map(() => Array(column).fill(0));

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            for(let k = 0; k < m1[0].length; k++) {
                temp[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }

    return temp;
}

function gaussJordan(m1) {
    let col = m1[0].length;
    let currentRow = 0;

    for(let i = 0; i < col; i++) {
        //find pivot row
        let pivotRow = findPivot(m1, currentRow, i);
        if(pivotRow == -1) {
            continue;
        }
        swapRow(m1, currentRow, pivotRow);

        //make pivot eliminate
        let pivotValue = m1[currentRow][i];
        for(let j = i; j < col; j++) {
            m1[currentRow][j] /= pivotValue;
            print(m1);
        }

        let row = m1.length;
        for(let k = 0; k < row; k++) {
            //do not subtract currentRow from currentRow
            if(k == currentRow) {
                continue;
            }
            
            for(let j = i; j < col; j++) {
                m1[k][j] = m1[k][j] - m1[currentRow][j] * m1[k][i];
            }
        }

        currentRow++;
    }
}

/*
    find a pivot row that has non-zero element at given row
    if all row has zero element, return -1
*/
function findPivot(m1, currentRow, currentCol) {
    for(let i = currentRow; i < m1.length; i++) {
        if(m1[i][currentCol] != 0) {
            return i;
        }
    }

    return -1;
}

// swap two rows i and j
function swapRow(m1, i, j) {
    let temp = m1[i];
    m1[i] = m1[j];
    m1[j] = temp;
}



let a = [[1,2,3],
         [4,5,6],
         [7,8,9]];

let b = [[3,2],
         [1,0],
         [2,6]];

let c = [[0,2,3],
         [0,0,0],
         [7,0,0]];

print(subtract(a, b));
print(add(a, b));
print(multiplication(a,b));

swapRow(a, 0, 2)
print(a)
// console.log(findPivot(c, 2));

console.log("gauss Jordan\n\n");
print(c);

console.log(gaussJordan(c));
print(c);

function print(a) {
    for(let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
    console.log();
}
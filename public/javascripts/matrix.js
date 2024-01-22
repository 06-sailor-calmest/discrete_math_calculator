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


let a = [[1,2,3],
         [4,5,6],
         [7,8,9]];

let b = [[3,2],
         [1,0],
         [2,6]];

console.log(subtract(a, b));
console.log(add(a, b));
console.log(multiplication(a,b));
const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

function power(mtrx,p){
    //mtrx is the matrix you input
    //p is the power of the matrix you want
    for(p=0;p<100;p++){

    }
let B = Matrix(A.prod(A));
let C = Matrix()
}


//testing code
console.log(power(A,10));

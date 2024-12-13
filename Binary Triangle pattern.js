// Binary Triangle pattern
// Print a binary pattern in a triangle shape for a given number of rows

function binaryTriangle(rows) {
  for(let i = 1; i <= rows; i++){
    let row = '';
    for(let j= 1; j <= i; j++){
      row += (i + j) % 2;
    }
    console.log(row);
    
  }
}
binaryTriangle(5)

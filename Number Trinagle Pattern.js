// Number Trinagle Pattern
//Print a Triangle Pattern of numbers for a given numbers of rows
function numberTriangle(numt) {
  for(let i = 0; i <= numt; i++){
    let numt1 = '';
    for(let j = 1; j <= i; j++){
      numt1 += j + '';
    }
    console.log(numt1);
  }
}
numberTriangle(5)

// Hallow square Pattern
// print a hollow square pattern gor a given side length

function hallowsqaure(n){
  for(let i = 1; i <= n; i++){
    if(i==1 || i ===n){
      console.log('*'.repeat(n));
    }
    else{
      console.log('*' + ' '.repeat(n-2)+ '*');
      
    }
    
  }
}
hallowsqaure(5)












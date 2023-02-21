
//   challenge zero web school

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";


let solution = myString.split(',').filter(function(ele){

  return !ele !== isNaN(Number(ele))
  
})
.map(function ( ele ){
  return ele[0].replace('_',' ')

})
.reduce(function(acc ,cur,index) {
  console.log(acc);
  console.log(cur);
  console.log(index);
  return acc+cur
})

console.log(solution);// Elzero Web School




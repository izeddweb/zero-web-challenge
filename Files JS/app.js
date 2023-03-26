
// //   challenge zero web school

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";


// let solution = myString.split(',').slice(0,length-true).filter(function(ele){

//   return !ele !== isNaN(Number(ele))
  
// })
// .map(function ( ele ){
//   return ele[0].replace('_',' ')

// })
// .reduce(function(acc ,cur,index) {
//   // console.log(acc);
//   // console.log(cur);
//   // console.log(index);
//   return acc+cur
// })

// console.log(solution);// Elzero Web School

//                 set variable

//        Set variable

const boxs = document.querySelectorAll('.box')

const observer = new IntersectionObserver( (entries)=> {
  entries.forEach((entrie) => {
    if (entrie.isIntersecting){
      entrie.target.classList.add('show','slide')
    }
    
    console.log( entrie.isIntersecting);
  })
},options ={
  threshold:.2 ,
})


boxs.forEach((box)=> {
  observer.observe(box)
})


























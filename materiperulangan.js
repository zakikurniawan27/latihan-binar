// For itu "Diulang Sampai"
// for (let x = 1; x <= 10; x++) {
//   for (let z = 1; z <= 10; z++) {
//     console.log('x = '+ x,'z = '+ z)
//   }
// }

// For itu "Diulang Sampai"
// const ulang = a =>{
//     for (let x = 1; x <= a; x++) {
//         let temp = ''        
//         for (let z = 1; z <= x; z++) {
//           temp += x
//         }
        
//         console.log(temp)
//       }
// }
// console.log(ulang(5))

  
  console.log('==========================================================')
  console.log('==========================================================')
  // For itu "Diulang Sampai"
//   for (let x = 1; x <= 5; x++) {
//     let temp = ''
//     for (let z = 1; z <= 5; z++) {
//       // temp = temp + x + ' '
//       temp += x + ' '
//     }
//     console.log(temp)
//   }

  /*
  1     
  2 2 
  3 3 3 
  4 4 4 4 
  5 5 5 5 5
  
  1
  1 2
  1 2 3
  1 2 3 4
  1 2 3 4 5
  */
 
// ****
// ***
// **
// *
// **
// ***
// ****
// const star = (a,b,c,d,e) =>{
//   for(let k = e; k >= c; k--){
//     let temp = ''
//     for(let l = b; l <= k; l++){
//       temp += '*' + ''
//     }
//     console.log(temp)
//   }  
//   for(let i = d; i <= a; i++){
//     let temp = ''
//     for(let j = b; j <= i; j++){
//       temp += '*' + ''   
//     }
//     console.log(temp)
//   }
// }
// console.log(star(4,1,1,2,4))

// *
// **
// ***
// ****
// ***
// **
//*
// const star = (a,b,c,d,e) =>{
//   for(let i = d; i <= a; i++){
//     let temp = ''
//     for(let j = b; j <= i; j++){
//       temp += '*' + ''   
//     }
//     console.log(temp)
//   }
//   for(let k = e; k >= c; k--){
//     let temp = ''
//     for(let l = b; l <= k; l++){
//       temp += '*' + ''
//     }
//     console.log(temp)
//   }
// }
// console.log(star(4,1,1,1,3))


// =========1=========
// =======22122=======
// ====33322122333====
// 4444333221223334444
const ulang = (a,b) =>{
  for(let i = a; i <= b; i++){
    let temp = ''
    for(let j = a; j <= i; j++){
      temp += i + ''
      for(let k = a; k <= j; k++){
        temp += j + ''
      }
    }
    console.log(temp)
  }
}
console.log(ulang(1,4))

// 1223334444333221
// =22333444433322=
// ===3334444333===
// ======4444======
  
  // let i = 1
  // // While itu "Diulang selama"
  // while(i<=10){
  //   console.log(i)
  //   i++
  // }
  
  // let j = 2
  // do {
  //   console.log(j)
  //   j++
  // }while(j<1)
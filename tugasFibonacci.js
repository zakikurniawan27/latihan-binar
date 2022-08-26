//array deret fibonacci 
const bilanganFibonacci = n =>{
    let arr = []
    let fib = 1
    let fib_1= 1
    let fib_2= 0
    for(let i = 0; i< n; i++){
        arr.push(fib)
        fib = fib_1 + fib_2
        fib_2 = fib_1
        fib_1 = fib
        
    }
    return arr
}
console.log(bilanganFibonacci(5))

//parameter sebagai bilangan terbesar
const bilanganFibonacci2 = n =>{
    let arr =[]
    let fib = 1
    let fib_1 = 1
    let fib_2 = 0
    for(let i = 0; i<n; i++){
        if(fib <= n){
            arr.push(fib)
            fib = fib_1 + fib_2
            fib_2 = fib_1
            fib_1 = fib
        }
    }
    // if(n < 8 && n > 5){
    //     for(let i = 0; i<5; i++){
    //         arr.push(fib)
    //         fib = fib_1 + fib_2
    //         fib_2 = fib_1
    //         fib_1 = fib
    //     }
    //     return arr
    // }else if(n < 13 && n >= 8){
    //     for(let i = 0; i<6; i++){
    //         arr.push(fib)
    //         fib = fib_1 + fib_2
    //         fib_2 = fib_1
    //         fib_1 = fib
    //     }
    //     return arr
    // }else if(n < 21 && n >= 13){
    //     for(let i = 0; i<7; i++){
    //         arr.push(fib)
    //         fib = fib_1 + fib_2
    //         fib_2 = fib_1
    //         fib_1 = fib
    //     }
    //     return arr
    // }else{
    //     for(let i = 0; i<n; i++){
    //         arr.push(fib)
    //         fib = fib_1 + fib_2
    //         fib_2 = fib_1
    //         fib_1 = fib
    //     }
    //     return arr
    // }
    return arr
}
console.log(bilanganFibonacci2(10))
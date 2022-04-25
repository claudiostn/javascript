function parimpar (n){
    if (n%2==0){
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = parimpar(4)
console.log(`O número é ${res}`)
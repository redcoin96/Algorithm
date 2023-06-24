function solution(brown, yellow) {
    let measure = []
    let num = brown + yellow
    for(let i = 2; i < num; i++){
        if(num%i === 0){
           measure.push(i) 
        }
    }
    
    for(i = 0, j = measure.length-1; i<=j; i++, j--){
        if(measure[i] !== 2){
          let X = measure[i]
          let Y = measure[j]
          if((2*(X+Y)-4) === brown) return [Y,X]
        }
    }
}

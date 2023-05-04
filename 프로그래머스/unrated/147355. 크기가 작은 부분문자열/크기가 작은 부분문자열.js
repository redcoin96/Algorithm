function solution(t, p) {
    let numarr = []
    let count = 0;
    let arr = t.split('')
    for(let i = 0; i<arr.length-p.length+1; i++){
        numarr.push(parseInt(arr.slice(i,i+p.length).join('')))
    }
    for(let i = 0; i<numarr.length; i++){
        if(parseInt(p)>=numarr[i]) count++
    }
    return count
    
}
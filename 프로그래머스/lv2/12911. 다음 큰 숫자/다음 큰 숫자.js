function solution(n) {
    let len1 = getBinaryLen(n)
    let len2;
    while(len1 !== len2){
        n++
        len2 = getBinaryLen(n)
    }
    return n
}

function getBinaryLen(n){
    return n.toString(2).split('').filter(i=>i=="1").length
}
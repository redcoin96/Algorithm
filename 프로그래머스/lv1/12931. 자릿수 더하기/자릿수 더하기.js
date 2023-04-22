function solution(n){
    let sum = 0;
    let str = String(n)
    let len = str.length;
    for (i=0; i<len; i++){
        sum += Number(str[i])
    }
    return sum
}
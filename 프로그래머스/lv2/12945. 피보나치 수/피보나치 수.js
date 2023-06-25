function solution(n) {
    let prev = 0;
    let cur = 1;
    for(let i = 0; i<n-1; i++){
        let sum = (prev+cur)%1234567
        prev = cur
        cur = sum
    }
    return cur
}
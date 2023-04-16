function solution(a, b) {
    let arr = [a,b].sort((a,b)=>a-b);
    let min = arr[0];
    let max = arr[1];
    let sum = min;
    for(let i = min+1; i<=max; i++){
        sum += i
    }

    return sum;
}
function solution(d, budget) {
    const arr = d.sort((a,b)=>a-b)
    let sum = 0;
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if (sum+arr[i] <= budget){
            sum += arr[i]
            count++
        }
    }
    return count
}
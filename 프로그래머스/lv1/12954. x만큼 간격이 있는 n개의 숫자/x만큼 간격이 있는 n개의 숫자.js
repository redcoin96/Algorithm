function solution(x, n) {
    var answer = [];
    let num = x
    for(i=0; i<n; i++){
        if(answer.length!==0) num += x
        answer.push(num)
    }
    return answer
}
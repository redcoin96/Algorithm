function solution(s) {
    let strarr = s.split('')
    if (strarr.length === 1) return [-1]
    let answer = [-1]

    for(let i = 1; i < strarr.length; i++){
        let count = 0;
        for(let j = i-1; j>=0; j--){
           count++;
            if(strarr[i]===strarr[j]){
                answer.push(count);
                break;
            }
            if(j===0) answer.push(-1)
        }
    }
    return answer

}
function solution(answers) {
    let answer = []
    
    const p1 = [1,2,3,4,5]
    const p2 = [2,1,2,3,2,4,2,5]
    const p3 = [3,3,1,1,2,2,4,4,5,5]
    
    let ans1 = answers.filter((a,i)=>a === p1[i%5]).length
    let ans2 = answers.filter((a,i)=>a === p2[i%8]).length
    let ans3 = answers.filter((a,i)=>a === p3[i%10]).length

    let max = Math.max(ans1, ans2, ans3);
    
    if(ans1 === max) answer.push(1);
    if(ans2 === max) answer.push(2);
    if(ans3 === max) answer.push(3);
    
    return answer;
}
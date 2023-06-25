function solution(queue1, queue2) {
    let targetSum = queue1.concat(queue2).reduce((a,c)=>a+c)/2
    let currentSum = queue1.reduce((a,c)=>a+c)
    if (!Number.isInteger(targetSum)) return -1
    
    let pointer1 = 0;
    let pointer2 = 0;
    
    for(let i = 0; i < queue1.length * 3; i++){
        //q1을 모두 q2로 보내고, a2에서 하나를 제외하고 모두 a1으로 보내면 q1 * 3이 최대경우의 수     
        if(currentSum === targetSum) return i;
        if(currentSum < targetSum) {
           currentSum += queue2[pointer2]
           queue1.push(queue2[pointer2])
           pointer2++
        }  else if(currentSum > targetSum) {
           currentSum -= queue1[pointer1]
           pointer1++
        } 
      }
    return -1
}
//큰쪽 => 작은쪽
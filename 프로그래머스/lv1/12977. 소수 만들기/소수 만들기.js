function solution(nums) {
    let count = 0;
    for (let i = 0; i<nums.length; i++){
       for (let j = i+1; j<nums.length; j++){
           for (let k = j+1; k<nums.length; k++){
                let sum = nums[i] + nums[j] + nums[k]
                let isPrime = true
                for(let i = 2; i < sum; i++){
                    if(sum%i === 0) isPrime = false
                }
                isPrime && count++
            } 
        } 
    }
    return count
}
 /*
 소수 판별:  X를 2부터 X-1까지 모든 수로 나누어보는 것(하나라도 나누어 떨어지는 숫자가 존재하면 소수가 아님)
 (1, 2에 대한 예외 처리)
 */
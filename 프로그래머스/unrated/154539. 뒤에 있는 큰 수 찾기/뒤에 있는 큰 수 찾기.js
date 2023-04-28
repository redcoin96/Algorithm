function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1)
    let stack = []
    
    for(let i = numbers.length-1; i>=0; i--){
        if(stack.length!==0 && stack[stack.length-1]<=numbers[i]){
             while(stack[stack.length-1]<=numbers[i] && stack.length !== 0){
                    stack.pop()
                }}
        if(stack.length!==0){
              answer[i]=stack[stack.length-1]
        } 
        stack.push(numbers[i])
    }
    return answer
} 
// 	   [2, 3, 3, 5] [5,3] [-1,5,5,-1]
//     스택사용 (원하는 (큰) 값이 나올때까지 pop을 한다!)
//     [-1,6,6,8,-1]
//     [8,6,2]
//     [9,3,2,6,8] 
    
    
//     let currentNum = numbers[0]
//     let answer = []
//     for(let i = 0; i<)

//     for(let i = 0; i<numbers.length; i++){
//        for(let j = i+1; j<numbers.length; j++){
//             if(numbers[i]<numbers[j]) {
//                 numbers[i] = numbers[j]
//                 break;
//             }
//             if(j===numbers.length-1) numbers[i] = -1
//        }
//        if(i===numbers.length-1) numbers[i] = -1
//     }
//     return numbers

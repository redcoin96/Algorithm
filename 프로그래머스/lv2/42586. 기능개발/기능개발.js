function solution(progresses, speeds) {
   let last = progresses.map(function(a, i){
       return Math.ceil((100-a) / speeds[i])
   })
   
   let answer = []
   let stack = [last[0]]
   for(let i = 1; i<last.length; i++){
       if (stack[0] >= last[i]){
           stack.push(last[i])
       } else{
           answer.push(stack.length)
           stack = [last[i]]
       }
   }
   answer.push(stack.length)
   return answer
}
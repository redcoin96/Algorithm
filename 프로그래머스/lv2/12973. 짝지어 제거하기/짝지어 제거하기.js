function solution(s){
   if(s.length % 2 != 0) return 0
    
   let stack = []
   for (let i = 0; i<s.length; i++){
       if (stack[stack.length-1] === s[i]){
          stack.pop()
       } else {stack.push(s[i])}
   }
   return stack[0] ? 0 : 1
    //스택 구현 할때는 요소 스택에 넣기 전에 검사하기
}